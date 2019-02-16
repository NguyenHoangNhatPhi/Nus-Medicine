import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.gotoListChat = this.gotoListChat.bind(this);
    }

    gotoRenuion(type) {
        if (type === 'GIVING') {
            this.props.navigation.navigate('Giving');
            this.props.actions.app.changeRouterDrawer('Giving')
        } else if (type === 'CLASS') {
            this.props.navigation.navigate('ClassReunion');
            this.props.actions.app.changeRouterDrawer('ClassReunion')
        }
    }

    gotoListChat() {
        this.props.navigation.navigate('Messaging');
        this.props.actions.app.changeRouterDrawer('Messaging')
    }



}

const mapStateToProps = state => ({
})

export default connectRedux(mapStateToProps, HomePageScreen);