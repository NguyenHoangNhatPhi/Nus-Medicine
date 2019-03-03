import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class ListChatScreen extends Layout {
    constructor(props) {
        super(props);
    }

    setUpRoomChat(user) {
        const { navigation } = this.props;
        const titleList = navigation.getParam('titleList', 'ALUMNI SEARCH');
        this.props.actions.chat.updateCurrentUserChat(user);
        this.props.navigation.navigate('Chat', {
            userChat: user,
            titleList
        })
    }

    componentWillUnmount() {
        this.props.actions.app.resetListchat();
    }

}

const mapStateToProps = state => ({
    isLoadingSearchUser: state.app.isLoadingSearchUser,
    listSearch: state.app.listSearch
})

export default connectRedux(mapStateToProps, ListChatScreen);
