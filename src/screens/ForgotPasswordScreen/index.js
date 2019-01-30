import React from 'react';
import { timer } from 'rxjs';

import Layout from './layout';
import { validateEmail } from '../../utils/func';
import connectRedux from '../../redux/ConnectRedux';


class ForgotPasswordScreen extends Layout {
    constructor(props) {
        super(props);

        this.emailInputRef = React.createRef();
        this.toastRef = React.createRef();

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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isForgotPasswordSuccess && prevProps.isForgotPasswordSuccess !== this.props.isForgotPasswordSuccess) {
            this.toastRef.current.show('Success , please check your email !');
            this.props.actions.app.resetStateForgotPassword();
            const source = timer(1500);
            source.subscribe(x => {
                this.props.navigation.navigate('Login');
            })
        }
    }

}

const mapStateToProps = state => ({
    isLoadingForgotPassword: state.app.isLoadingForgotPassword,
    messageForgotPasswordError: state.app.messageForgotPasswordError,
    isForgotPasswordSuccess: state.app.isForgotPasswordSuccess
})

export default connectRedux(mapStateToProps, ForgotPasswordScreen);