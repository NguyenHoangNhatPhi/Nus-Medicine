import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class MessagingScreen extends Layout {
    constructor(props) {
        super(props);

        this.searchInputRef = React.createRef();

        this.searchUser = this.searchUser.bind(this);
        this.gotoOtherAlumini = this.gotoOtherAlumini.bind(this);
    }

    searchUser() {
        const fullname = this.searchInputRef.current.state.value;
        this.props.actions.app.searchUser(fullname);
    }

    gotoOtherAlumini() {
        this.props.actions.app.resetStateSearch();
        this.props.navigation.navigate('OtherLamuni');
    }

    searchUserByYear() {
        const {profile} = this.props;
        this.props.actions.app.searchGraduationYear(profile.graduationYear);
    }

    componentDidUpdate(prevProps, prevState) {
        const { isLoadingSearchUser } = this.props;
        if (!isLoadingSearchUser && this.props.listSearch.length > 0) {
            this.props.navigation.navigate('ListChat');
        }
    }

}


const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isLoadingSearchUser: state.app.isLoadingSearchUser,
    listSearch: state.app.listSearch,
    messageSearchUserChat: state.app.messageSearchUserChat
})

export default connectRedux(mapStateToProps, MessagingScreen);
