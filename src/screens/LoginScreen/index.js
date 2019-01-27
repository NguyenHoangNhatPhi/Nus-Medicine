import React from 'react';
import { Keyboard } from 'react-native';

import Layout from './layout';
import { validateEmail } from '../../utils/func';
import connectRedux from '../../redux/ConnectRedux';

class LoginScreen extends Layout {
    constructor(props) {
        super(props);

        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();

        this.login = this.login.bind(this);
        this.focusTextInputPassword = this.focusTextInputPassword.bind(this);
        this.gotoForgotScreen = this.gotoForgotScreen.bind(this);
        this.gotoRegisterScreen = this.gotoRegisterScreen.bind(this);
    }

    login() {
        const email = this.emailInputRef.current.state.value;
        const password = this.passwordInputRef.current.state.value;
        if (email === '') {
            alert('The email not empty !');
            return;
        }
        if (password === '') {
            alert('The password not empty !');
            return
        }
        if (!validateEmail(email)) {
            alert('Wrong Email');
            return;
        }
        Keyboard.dismiss();
        this.props.actions.app.login({
            email,
            password
        })
    }

    focusTextInputPassword() {
        this.passwordInputRef.current.onFocusTextInput();
    }

    gotoForgotScreen() {
        this.props.navigation.navigate('ForgotPassword');
    }

    gotoRegisterScreen() {
        this.props.navigation.navigate('Register')
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isLoginApp) {
            this.props.navigation.navigate('Main');
            this.props.actions.app.resetStateLogin();
        }
    }

}

const mapStateToProps = state => ({
    loadingLogin: state.app.loadingLogin,
    messageLoginError: state.app.messageLoginError,
    isLoginApp: state.app.isLoginApp
})

export default connectRedux(mapStateToProps, LoginScreen);;