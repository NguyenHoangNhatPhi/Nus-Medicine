import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class ProfileScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            disableEditProfile: true,
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
        const fullname = this.fullnameRef.current.state.text;
        const graduationYear = this.graduationYearRef.current.state.text;
        if (fullname.length < 4) {
            alert('The full name must be over 2 words !');
            return;
        }
        if (graduationYear.length !== 4) {
            alert('The graduation year invalid !')
        }
        this.props.actions.app.updateProfile({
            fullname,
            graduationYear: parseInt(graduationYear)
        })
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