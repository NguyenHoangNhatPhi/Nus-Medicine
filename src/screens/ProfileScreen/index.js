import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class ProfileScreen extends Layout {
    constructor(props) {
        super(props);
        const { fullname, email, graduationYear } = this.props.profile;
        this.state = {
            disableEditProfile: true,
            fullname,
            email,
            graduationYear
        }

        this.fullnameRef = React.createRef();
        this.graduationYearRef = React.createRef();

        this.editProfile = this.editProfile.bind(this);
        this.cancleEditProfile = this.cancleEditProfile.bind(this);
        this.submitEditProfile = this.submitEditProfile.bind(this);
        this.gotoChangePassword = this.gotoChangePassword.bind(this);
    }

    editProfile() {
        this.setState({
            disableEditProfile: false
        })
    }

    cancleEditProfile() {
        const { fullname, graduationYear } = this.props.profile;
        this.fullnameRef.current.setText(fullname);
        this.graduationYearRef.current.setText(`${graduationYear}`)
        this.setState({
            disableEditProfile: true
        })
    }

    submitEditProfile() {
        this.setState({
            disableEditProfile: true
        })
    }

    gotoChangePassword() {
        this.props.navigation.navigate('ChangePassword');
    }


}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
})

export default connectRedux(mapStateToProps, ProfileScreen);