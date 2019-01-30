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

}


const mapStateToProps = state => ({
    loadingLogin: state.app.loadingLogin,
    messageLoginError: state.app.messageLoginError,
    isLoginApp: state.app.isLoginApp
})

export default connectRedux(mapStateToProps, OtherLamuniScreen);
