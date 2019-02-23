import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class ListChatScreen extends Layout {
    constructor(props) {
        super(props);
    }

    setUpRoomChat(user){
        this.props.actions.chat.updateCurrentUserChat(user);
        this.props.navigation.navigate('Chat',{
            userChat:user
        })
    }

}

const mapStateToProps = state => ({
    isLoadingSearchUser: state.app.isLoadingSearchUser,
    listSearch: state.app.listSearch
})

export default connectRedux(mapStateToProps, ListChatScreen);
