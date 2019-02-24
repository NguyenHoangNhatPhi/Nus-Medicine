import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class OtherLamuniScreen extends Layout {
    constructor(props) {
        super(props);

        this.searchInputRef = React.createRef();

        this.searchUser = this.searchUser.bind(this);
    }

    searchUser() {
        const fullname = this.searchInputRef.current.state.value;
        this.props.actions.app.searchUser(fullname);
    }

    componentDidUpdate(prevProps, prevState) {
        const { isLoadingSearchUser } = this.props;
        if (!isLoadingSearchUser && this.props.listSearch.length > 0) {
            this.props.navigation.navigate('ListChat');
        }
    }

}


const mapStateToProps = state => ({
    loadingLogin: state.app.loadingLogin,
    messageLoginError: state.app.messageLoginError,
    isLoginApp: state.app.isLoginApp,
    isLoadingSearchUser: state.app.isLoadingSearchUser,
    listSearch: state.app.listSearch,
    messageSearchUserChat: state.app.messageSearchUserChat
})

export default connectRedux(mapStateToProps, OtherLamuniScreen);
