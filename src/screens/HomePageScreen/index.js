import React from 'react';
import { AppState, Platform, PushNotificationIOS } from 'react-native';
import SocketIOClient from 'socket.io-client';
// import PushNotification from 'react-native-push-notification';
import { timer } from 'rxjs';
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
        // this.handleDeepLink = this.handleDeepLink.bind(this);
    }

    componentDidMount() {
        this.connectSocket();
        AppState.addEventListener('change', this.handleAppStateChange);
        // PushNotification.configure({
        //     onRegister: function(token) {
        //         console.log( '---- TOKEN:', token );
        //     },
        //     onNotification: this.handleDeepLink,
        //     permissions: {
        //         alert: true,
        //         badge: true,
        //         sound: true
        //     },

        //     popInitialNotification: true,
        //     requestPermissions: true,
        // });
        // PushNotificationIOS.addEventListener('notification', this.handleLocalNotificationIOS);
    }

    handleLocalNotificationIOS = notification => {
        if (Platform.OS === 'ios' && !this.props.isAtChatScreen && notification._data.openedInForeground) {
            const temptUser = notification._data;
            this.props.actions.chat.handleNumberMessageNotSeen({
                isClear: true,
                email: temptUser.email
            })
            this.props.actions.chat.updateCurrentUserChat(temptUser);
            this.props.navigation.navigate('Chat', {
                temptCurrentUserChat: temptUser,
                titleList: 'CHAT HISTORY'
            });
            this.props.actions.chat.updateAt({
                email: temptUser.email
            });
            this.props.actions.app.changeRouterDrawer('Messaging');
        }
    }

    handleDeepLink = notification => {
        if (Platform.OS === 'android' && !this.props.isAtChatScreen) {
            const temptUser = notification.userInfo;
            this.props.actions.chat.handleNumberMessageNotSeen({
                isClear: true,
                email: temptUser.email
            })
            this.props.actions.chat.updateCurrentUserChat(temptUser);
            this.props.navigation.navigate('Chat', {
                temptCurrentUserChat: temptUser,
                titleList: 'CHAT HISTORY'
            });
            this.props.actions.chat.updateAt({
                email: temptUser.email
            });
            this.props.actions.app.changeRouterDrawer('Messaging');
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
                this.clearDataLocal();
                // alert('clearDataLocal')
            } else {

                if (this.props.isAtChatScreen && this.props.currentUserChat.email === updateCurrentChat.email
                ) {
                    console.log('updateCurrentUserChat :' + JSON.stringify(updateCurrentChat) )
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
                // PushNotification.localNotification({
                //     id: '0',
                //     ticker: "",
                //     bigText: "",
                //     subText: "",
                //     title: `${sender.fullname} sent you a message`,
                //     message: message.message,
                //     visibility: "public",
                //     userInfo: sender

                // })
            }
        }
    }

    gotoRenuion(type) {
        this.props.navigation.navigate(type);
        this.props.actions.app.changeRouterDrawer(type);

    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }


}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isAtChatScreen: state.chat.isAtChatScreen,
    currentUserChat: state.chat.currentUserChat,
    io: state.app.io,
})

export default connectRedux(mapStateToProps, HomePageScreen);

