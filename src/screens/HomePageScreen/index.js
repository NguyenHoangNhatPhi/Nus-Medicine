import React from 'react';
import { AppState, Platform } from 'react-native';
import SocketIOClient from 'socket.io-client';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import _ from 'ramda';

import Configs from '../../configs/api';
import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.state = {
            appState: AppState.currentState,
        }

        this.addMessage = this.addMessage.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    async  componentDidMount() {
        this.connectSocket();
        AppState.addEventListener('change', this.handleAppStateChange);
        // ---- Open Noti when app closed  -----
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const action = notificationOpen.action;
            const notification = notificationOpen.notification;
            const data = notification.data;
            this.props.actions.chat.handleNumberMessageNotSeen({
                isClear: true,
                email: data.email
            });
            this.props.actions.chat.updateCurrentUserChat(data);
            this.props.navigation.navigate('Chat', {
                temptCurrentUserChat: data,
                titleList: 'CHAT HISTORY'
            });
            this.props.actions.chat.updateAt({
                email: data.email
            });
            this.props.actions.app.changeRouterDrawer('Messaging');
        }
        // ---- Setup Firebase -----
        const channel = new firebase.notifications.Android.Channel(
            'NusPush',
            'NusMedicine',
            firebase.notifications.Android.Importance.Max
        ).setDescription('A natural description of the channel');
        firebase.notifications().android.createChannel(channel);
        this.setupFirebase();

    }

    async setupFirebase() {
        try {
            const enabled = await firebase.messaging().hasPermission();
            if (enabled) {
                if (_.isEmpty(this.props.fcmToken)) {
                    const fcmToken = await firebase.messaging().getToken();
                    const deviceId = DeviceInfo.getUniqueID();
                    this.props.actions.chat.setupPushNotiServer({
                        token: fcmToken,
                        deviceId: deviceId,
                        platform: Platform.OS
                    });
                    this.props.actions.dataLocal.saveTokenFCM({
                        fcmToken,
                        deviceId,
                        platform: Platform.OS
                    })
                }

            } else {
                await firebase.messaging().requestPermission();
            }
            // -------- Listen for Notifications ---------
            this.notificationListener = firebase.notifications().onNotification((notification) => {
                if (Platform.OS === 'android') {
                    notification
                        .android.setChannelId('NusPush')
                        .android.setSmallIcon('ic_launcher');
                    firebase.notifications().
                        displayNotification(notification)
                        .catch(err => console.error(err));

                } else {
                    notification.setSound("default");
                    firebase.notifications()
                        .displayNotification(notification)
                        .catch(err => console.error(err));
                }
            });
            // -------- Listen for a Notification being opened ---------
            this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
                const action = notificationOpen.action;
                const notification = notificationOpen.notification;
                const data = notification.data
                if (!this.props.isAtChatScreen) {
                    this.props.actions.chat.handleNumberMessageNotSeen({
                        isClear: true,
                        email: data.email
                    });
                    this.props.actions.chat.updateCurrentUserChat(data);
                    this.props.navigation.navigate('Chat', {
                        temptCurrentUserChat: data,
                        titleList: 'CHAT HISTORY'
                    });
                    this.props.actions.chat.updateAt({
                        email: data.email
                    });
                    this.props.actions.app.changeRouterDrawer('Messaging');
                }
            });
        } catch (error) {
        }

    }


    clearDataLocal() {
        const { profile } = this.props;
        const { email, fullname, socketId } = profile;
        this.props.navigation.navigate('Auth');
        this.props.actions.dataLocal.clearProfileLocal();
        this.props.actions.app.resetRouter();
        this.props.io.emit('KICK_USER', ({ email, fullname, socketId }));
    }

    connectSocket() {
        const { profile } = this.props;
        this.socket = SocketIOClient(Configs.BASE_SOCKET, {
            query: { token: profile.accesstoken }
        });
        this.socket.emit('USER_CONNECTED', profile);
        this.socket.on('USER_CONNECTED', (updateProfile) => {
            // ----- get socket ID -----
            this.props.actions.dataLocal.updateProfile(updateProfile)
        });
        this.socket.on('UPDATE_USER_CONNECTED', (updateCurrentChat) => {
            if (this.props.isAtChatScreen && this.props.currentUserChat.email === updateCurrentChat.email
            ) {
                this.props.actions.chat.updateCurrentUserChat(updateCurrentChat)
            }
            // da user vs logout 
            // if (profile.email == updateCurrentChat.email) {
            //     this.clearDataLocal();
            // } else {

            //     if (this.props.isAtChatScreen && this.props.currentUserChat.email === updateCurrentChat.email
            //     ) {
            //         console.log('updateCurrentUserChat :' + JSON.stringify(updateCurrentChat))
            //         this.props.actions.chat.updateCurrentUserChat(updateCurrentChat)
            //     }
            // }

        });

        this.socket.on('USER_DISCONNECTED', userDisconnected => {
            if (profile.email !== userDisconnected.email && this.props.isAtChatScreen &&
                this.props.currentUserChat.email === userDisconnected.email
            ) {
                this.props.actions.chat.clearSocketIdCurrenChat()
            }
        })

        this.socket.on('REPLY_PRIVATE_MESSAGE', this.addMessage);
        this.props.actions.app.setUpSocket(this.socket);
    }

    handleAppStateChange = (nextAppState) => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            this.connectSocket();
        } else {
            this.props.actions.chat.setFlagChatScreen(false);
        }
        this.setState({ appState: nextAppState });
    };


    addMessage(message) {
        if (message && message.message) {
            const { profile } = this.props;
            const sender = message.sender;
            const temptMessage = [{
                _id: message.time,
                text: message.message,
                createdAt: message.time,
                user: {
                    _id: message.isSender ? 1 : 2,
                    avatar: 'https://placeimg.com/140/140/any',
                }
            }];
            this.props.actions.chat.addMessage(temptMessage);
            if (profile.email !== sender.email && !this.props.isAtChatScreen) {
                this.props.actions.chat.handleNumberMessageNotSeen({
                    isAdd: true,
                    email: sender.email
                });
                // ---- local push -----
                this.sendLocalPush(sender, message.message);

            }
        }
    }

    sendLocalPush(sender, message) {
        if (Platform.OS === 'android') {
            const channel = new firebase.notifications.Android.Channel(
                'channelId',
                'Channel Name',
                firebase.notifications.Android.Importance.Max
            ).setDescription('A natural description of the channel');

            firebase.notifications().android.createChannel(channel);

            const localNotification = new firebase.notifications.Notification({
                sound: 'default',
                show_in_foreground: true,
            })
                .setTitle(`${sender.fullname} sent you a message`)
                .setBody(`${message}`)
                .setData(sender)
                .setSound("default")
                .android.setChannelId('channelId')
                .android.setSmallIcon('ic_launcher')
                .android.setColor('#f97300')
                .android.setPriority(firebase.notifications.Android.Priority.High);

            firebase.notifications()
                .displayNotification(localNotification)
                .catch(err => {});
        } else {
            const localNotification = new firebase.notifications.Notification()
                .setTitle(`${sender.fullname} sent you a message`)
                .setBody(`${message}`)
                .setData(sender)
                .setSound("default")
                .ios.setBadge(1);


            firebase.notifications()
                .displayNotification(localNotification)
                .catch(err => console.error(err));
        }


    }

    gotoRenuion(type) {
        this.props.navigation.navigate(type);
        this.props.actions.app.changeRouterDrawer(type);

    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
        this.notificationListener();
        this.notificationOpenedListener();
    }


}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isAtChatScreen: state.chat.isAtChatScreen,
    currentUserChat: state.chat.currentUserChat,
    io: state.app.io,
    fcmToken: state.dataLocal.fcmToken
})

export default connectRedux(mapStateToProps, HomePageScreen);

