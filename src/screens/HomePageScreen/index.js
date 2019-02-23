import React from 'react';
import { AppState } from 'react-native';
import SocketIOClient from 'socket.io-client';
import RNLocalNotifications from 'react-native-local-notifications';
import PushNotification from 'react-native-push-notification';

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
    }

    connectSocket() {
        const { profile } = this.props;
        this.socket = SocketIOClient('http://3.0.93.22:3000', {
            query: { token: profile.accesstoken }
        });
        this.socket.emit('USER_CONNECTED', profile);
        this.socket.on('USER_CONNECTED', (updateProfile) => {
            this.props.actions.dataLocal.updateProfile(updateProfile)
        });
        this.socket.on('REPLY_PRIVATE_MESSAGE', this.addMessage);
        this.props.actions.app.setUpSocket(this.socket);
    }

    handleAppStateChange = (nextAppState) => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            this.connectSocket();
            // if (this.props.isAtChatScreen) {
            //     this.props.actions.chat.setFlagChatScreen(true);
            // }
        } else {
            this.props.actions.chat.setFlagChatScreen(false);
        }
        this.setState({ appState: nextAppState });
    };


    addMessage(message) {
        if (message && message.message) {
            console.log('----message 0---')
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
                PushNotification.localNotification({
                    id: '0',
                    ticker: "My Notification Ticker",
                    bigText: "My big text that will be shown when notification is expanded",
                    subText: "",
                    title: `${sender.fullname} sent you a message`,
                    message: message.message,
                    visibility: "public"
                })
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
    isAtChatScreen: state.chat.isAtChatScreen
})

export default connectRedux(mapStateToProps, HomePageScreen);