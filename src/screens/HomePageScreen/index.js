import React from 'react';
import SocketIOClient from 'socket.io-client';
import RNLocalNotifications from 'react-native-local-notifications';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.addMessage = this.addMessage.bind(this);

        // ===== socket =====
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

    addMessage(message) {
        if (message && message.message) {
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
            RNLocalNotifications.createNotification(1, 'Some text', '20169-02-22 12:01', 'default');
        }
        
    }

    gotoRenuion(type) {
        this.props.navigation.navigate(type);
        this.props.actions.app.changeRouterDrawer(type);

    }

}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
})

export default connectRedux(mapStateToProps, HomePageScreen);