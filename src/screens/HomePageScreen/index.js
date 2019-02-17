import React from 'react';
import SocketIOClient from 'socket.io-client';


import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class HomePageScreen extends Layout {
    constructor(props) {
        super(props);
         // ===== socket =====
         const {profile} = this.props;
         this.socket = SocketIOClient('http://0c8385fe.ngrok.io', {
             query: { token: profile.accesstoken }
         });
         this.socket.emit('USER_CONNECTED', profile);
         this.socket.on('USER_CONNECTED',(updateProfile) => {
             this.props.actions.dataLocal.updateProfile(updateProfile)
         });
         this.props.actions.app.setUpSocket(this.socket);
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