import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class MessagingScreen extends Layout {
    constructor(props) {
        super(props);

        this.state = {
            titleList: ''
        }

        this.searchInputRef = React.createRef();

        this.searchUser = this.searchUser.bind(this);
        this.gotoOtherAlumini = this.gotoOtherAlumini.bind(this);
    }

    searchUser() {
        const fullname = this.searchInputRef.current.state.value;
        const {dispatch} = this.props.navigation;

        this.props.actions.app.searchUser(fullname,dispatch);
    }

    gotoOtherAlumini() {
        this.props.actions.app.resetStateSearch();
        this.props.navigation.navigate('OtherLamuni');
    }

    async searchUserByYear() {
        await this.setState({
            titleList: `CLASS OF ${this.props.profile.graduationYear}`
        })
        const { profile } = this.props;
        const {dispatch} = this.props.navigation;
        this.props.actions.app.searchGraduationYear(profile.graduationYear,dispatch);
    }

    getListFriends = async () => {
        await this.setState({
            titleList: `CHAT HISTORY`
        });
        const {dispatch} = this.props.navigation;

        this.props.actions.chat.getListFriends(dispatch);

    }

    componentDidUpdate(prevProps, prevState) {
        const { isLoadingSearchUser } = this.props;
        if (!isLoadingSearchUser && isLoadingSearchUser !== prevProps.isLoadingSearchUser && this.props.listSearch.length > 0) {
            this.props.navigation.navigate('ListChat', {
                titleList: this.state.titleList
            });
        }
    }

    componentWillUnmount() {
        this.props.actions.app.resetStateSearch();
    }

}


const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isLoadingSearchUser: state.app.isLoadingSearchUser,
    listSearch: state.app.listSearch,
    messageSearchUserChat: state.app.messageSearchUserChat
})

export default connectRedux(mapStateToProps, MessagingScreen);
