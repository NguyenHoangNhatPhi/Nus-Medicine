import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class HomePageScreen extends Layout {
    constructor(props) {
        super(props);
    }

    gotoRenuion(type) {
        this.props.navigation.navigate(type);
        this.props.actions.app.changeRouterDrawer(type);
        // switch (type) {
        //     case 'Giving':
        //         this.props.navigation.navigate(type);
        //         this.props.actions.app.changeRouterDrawer(type);
        //         break;

        // }
        // if (type === 'GIVING') {
        //     this.props.navigation.navigate('Giving');
        //     this.props.actions.app.changeRouterDrawer('Giving')
        // } else if (type === 'CLASS') {
        //     this.props.navigation.navigate('ClassReunion');
        //     this.props.actions.app.changeRouterDrawer('ClassReunion')
        // } else if (type === 'USEFUL') {
        //     this.props.navigation.navigate('UseFul');
        //     this.props.actions.app.changeRouterDrawer('ClassReunion')
        // }

    }

}

const mapStateToProps = state => ({
})

export default connectRedux(mapStateToProps, HomePageScreen);