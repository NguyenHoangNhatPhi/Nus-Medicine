import React from 'react';
import { AppState, Platform } from 'react-native';
import SocketIOClient from 'socket.io-client';
import { timer } from 'rxjs';
import firebase from 'react-native-firebase';

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

    componentDidMount() {
        this.connectSocket();
        AppState.addEventListener('change', this.handleAppStateChange);
        this.setupFirebase();
    }

    async setupFirebase() {
        try {
            await firebase.messaging().requestPermission();
            const enabled = await firebase.messaging().hasPermission();
            if (enabled) {
                this.notificationListener = firebase.notifications().onNotification((notification) => {
                    if (Platform.OS === 'android') {
                        const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
                            .setDescription('My apps test channel');
                        firebase.notifications().android.createChannel(channel);
                        notification
                            .android.setChannelId('channelId')
                            .android.setSmallIcon('ic_launcher');

                        firebase.notifications().displayNotification(notification)
                    } else if (Platform.OS === 'ios') {

                        const localNotification = new firebase.notifications.Notification()
                            .setNotificationId(notification.notificationId)
                            .setTitle(notification.title)
                            .setSubtitle(notification.subtitle)
                            .setBody(notification.body)
                            .setData(notification.data)
                            .ios.setBadge(notification.ios.badge);

                        firebase.notifications()
                            .displayNotification(localNotification)
                            .catch(err => console.error(err));

                    }
                });
            }
        } catch (error) {
            console.log(' ---error  : ', error)
        }

    }


    clearDataLocal() {
        const { profile } = this.props;
        const { email, fullname, socketId } = profile;
        this.props.navigation.navigate('Auth');
        this.props.actions.app.logOut();
        this.props.actions.app.resetRouter();
        this.props.io.emit('LOGOUT', ({ email, fullname, socketId }));
    }

    connectSocket() {
        const { profile } = this.props;
        this.socket = SocketIOClient(Configs.BASE_SOCKET, {
            query: { token: profile.accesstoken }
        });
        this.socket.emit('USER_CONNECTED', profile);
        this.socket.on('USER_CONNECTED', (updateProfile) => {
            this.props.actions.dataLocal.updateProfile(updateProfile)
        });
        this.socket.on('UPDATE_USER_CONNECTED', (updateCurrentChat) => {
            // da user vs logout 
            if (profile.email == updateCurrentChat.email) {
                // this.clearDataLocal();
            } else {

                if (this.props.isAtChatScreen && this.props.currentUserChat.email === updateCurrentChat.email
                ) {
                    console.log('updateCurrentUserChat :' + JSON.stringify(updateCurrentChat))
                    this.props.actions.chat.updateCurrentUserChat(updateCurrentChat)
                }
            }

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
            }
        }
    }

    gotoRenuion(type) {
        this.props.navigation.navigate(type);
        this.props.actions.app.changeRouterDrawer(type);

    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);

        this.notificationListener();
    }


}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isAtChatScreen: state.chat.isAtChatScreen,
    currentUserChat: state.chat.currentUserChat,
    io: state.app.io,
})

export default connectRedux(mapStateToProps, HomePageScreen);

