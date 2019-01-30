import React from 'react';

import Layout from './layout';
import { validateEmail } from '../../utils/func';
import connectRedux from '../../redux/ConnectRedux';


class ForgotPasswordScreen extends Layout {
    constructor(props) {
        super(props);

        this.emailInputRef = React.createRef();

        this.resetPassword = this.resetPassword.bind(this);
        this.gotoContactScreen = this.gotoContactScreen.bind(this);
    }

    resetPassword() {
        const email = this.emailInputRef.current.state.value;
        if (email === '') {
            alert('The email not empty ! ');
            return;
        }
        if (!validateEmail(email)) {
            alert('The email invalid ! ');
            return;
        }
        this.props.actions.app.forgotPassword({
            email
        })
    }

    gotoContactScreen() {
        this.props.navigation.navigate('ContactUs');
    }
}

const mapStateToProps = state => ({
    isLoadingForgotPassword: state.app.isLoadingForgotPassword,
    messageForgotPasswordError: state.app.messageForgotPasswordError
})

export default connectRedux(mapStateToProps, ForgotPasswordScreen);