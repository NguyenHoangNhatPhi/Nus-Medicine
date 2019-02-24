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
        this.props.navigation.navigate('OtherLamuni');
    }

    searchUserByYear() {
        this.props.actions.app.searchGraduationYear(1990);
        this.props.navigation.navigate('ListChat')
    }

}


const mapStateToProps = state => ({
    profile: state.dataLocal.profile
})

export default connectRedux(mapStateToProps, MessagingScreen);
