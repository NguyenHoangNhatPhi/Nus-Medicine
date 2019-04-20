import React from 'react';
import { AppState, Platform } from 'react-native';
import SocketIOClient from 'socket.io-client';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import _ from 'ramda';

import Configs from '../../configs/api';
import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';
import { cloneableGenerator } from 'redux-saga/utils';


class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.state = {
            appState: AppState.currentState,
        }

        this.replyMessage = this.replyMessage.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    async  componentDidMount() {
        const { dispatch } = this.props.navigation;

        this.connectSocket();
        AppState.addEventListener('change', this.handleAppStateChange);
        if (Platform.OS === 'ios') {
            firebase.notifications().setBadge(0);
        }
        // ---- Open Noti when app closed  -----
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            if (Platform.OS === 'ios') {
                firebase.notifications().setBadge(0);
            }
            const action = notificationOpen.action;
            const notification = notificationOpen.notification;
            const data = notification.data;
            // console.log('------ data : ', data);
            if (!data.type || data.type !== 'news') {
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
                }, dispatch);
                this.props.actions.app.changeRouterDrawer('Messaging');
            }

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
            const { dispatch } = this.props.navigation;

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
                const data = notification.data;
                // this.props.actions.chat.setFlagChatScreen(true);
                if (Platform.OS === 'ios') {
                    firebase.notifications().setBadge(0);
                }
                if (!data.type || data.type !== 'news') {
                    if (!this.props.isAtChatScreen) {
                        this.props.actions.chat.handleNumberMessageNotSeen({
                            isClear: true,
                            email: data.email
                        });
                        this.props.actions.chat.resetMessage();
                        this.props.actions.chat.getHistoryChat(data.email, dispatch);
                        this.props.actions.chat.updateCurrentUserChat(data);
                        this.props.navigation.navigate('Chat', {
                            temptCurrentUserChat: data,
                            titleList: 'CHAT HISTORY'
                        });
                        this.props.actions.chat.updateAt({
                            email: data.email
                        }, dispatch);
                        this.props.actions.app.changeRouterDrawer('Messaging');
                        this.props.actions.chat.setFlagChatScreen(true);
                    }else{
                        if(data.email !== this.props.currentUserChat.email){
                            this.props.actions.chat.handleNumberMessageNotSeen({
                                isClear: true,
                                email: data.email
                            });
                            this.props.actions.chat.resetMessage();
                            this.props.actions.chat.getHistoryChat(data.email, dispatch);
                            this.props.actions.chat.updateCurrentUserChat(data);
                            this.props.navigation.navigate('Chat', {
                                temptCurrentUserChat: data,
                                titleList: 'CHAT HISTORY'
                            });
                            this.props.actions.chat.updateAt({
                                email: data.email
                            }, dispatch);
                        }
                    }
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
            query: { token: profile.accesstoken },
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: Infinity
        });

        // this.socket.emit('USER_CONNECTED', profile);

        // this.socket.on('USER_CONNECTED', (updateProfile) => {
        //     this.props.actions.dataLocal.updateProfile(updateProfile);
        // });

        // this.socket.on('UPDATE_USER_CONNECTED', (updateCurrentChat) => {
        //     if (this.props.isAtChatScreen && this.props.currentUserChat.email === updateCurrentChat.email
        //     ) {
        //         this.props.actions.chat.updateCurrentUserChat(updateCurrentChat)
        //     }
        // });

        this.socket.on(`RECONNECT_SOCKET_${profile.email}`, data => {
            console.log(`RECONNECT_SOCKET_${profile.email} : `, data);
            this.props.actions.dataLocal.updateProfile(data);
        });

        this.socket.on('USER_DISCONNECTED', userDisconnected => {
            if (profile.email !== userDisconnected.email && this.props.isAtChatScreen &&
                this.props.currentUserChat.email === userDisconnected.email
            ) {
                this.props.actions.chat.clearSocketIdCurrenChat()
            }
        })

        this.socket.on('REPLY_PRIVATE_MESSAGE', this.replyMessage);
        this.socket.on('ADD_MESSAGE', this.addMessage);

        this.props.actions.app.setUpSocket(this.socket);
    }

    handleAppStateChange = (nextAppState) => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            if (Platform.OS === 'ios') {
                firebase.notifications().setBadge(0);
            }
            this.connectSocket();
        } else {
            this.props.io.emit('IS_BACKGROUND', this.props.profile);
            // this.props.actions.chat.setFlagChatScreen(false);
        }
        this.setState({ appState: nextAppState });
    };

    addMessage(message) {
        if (message && message.message) {
            const { profile, isAtChatScreen, currentUserChat } = this.props;
            const { dispatch } = this.props.navigation;
            const sender = message.sender;
            const receiver = message.receiver;
            const temptMessage = [{
                _id: message.time,
                text: message.message,
                createdAt: message.time,
                user: {
                    _id: message.isSender ? 1 : 2,
                    avatar: 'https://placeimg.com/140/140/any',
                }
            }];

            if (isAtChatScreen) {
                if (currentUserChat.email == sender.email) {
                    this.props.actions.chat.addMessage(temptMessage, dispatch);
                } else {
                    this.props.actions.chat.handleNumberMessageNotSeen({
                        isAdd: true,
                        email: sender.email
                    });
                    this.sendLocalPush(sender, message.message);
                }
            } else {
                this.props.actions.chat.handleNumberMessageNotSeen({
                    isAdd: true,
                    email: sender.email
                });
                this.sendLocalPush(sender, message.message);
            }

        }
    }

    replyMessage(message) {
        if (message && message.message) {
            const { profile, isAtChatScreen, currentUserChat } = this.props;
            const { dispatch } = this.props.navigation;
            const sender = message.sender;
            const receiver = message.receiver;
            const temptMessage = [{
                _id: message.time,
                text: message.message,
                createdAt: message.time,
                user: {
                    _id: message.isSender ? 1 : 2,
                    avatar: 'https://placeimg.com/140/140/any',
                }
            }];
            if (profile.email === sender.email) {
                this.props.actions.chat.addMessage(temptMessage, dispatch);
            }
            // if (isAtChatScreen) {
            //     console.log('----- isAtChatScreen ');
            //     if (profile.email === sender.email) {
            //         this.props.actions.chat.addMessage(temptMessage, dispatch);
            //     }
            // }else{
            //     console.log('----- not at chat screen ');
            // }
        }
    }

    async sendLocalPush(sender, message) {
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
                .catch(err => { });
        } else {
            let countBadge = await firebase.notifications().getBadge();
            countBadge++;
            const localNotification = new firebase.notifications.Notification()
                .setTitle(`${sender.fullname} sent you a message`)
                .setBody(`${message}`)
                .setData(sender)
                .setSound("default")
                .ios.setBadge(countBadge);

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
        this.props.io.disconnect();
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

