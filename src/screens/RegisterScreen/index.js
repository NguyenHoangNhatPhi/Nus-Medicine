import React from 'react';
import { Keyboard } from 'react-native';

import connectRedux from '../../redux/ConnectRedux';
import Layout from './layout';
import { validateEmail } from '../../utils/func';

class RegisterScreen extends Layout {
    constructor(props) {
        super(props);

        this.state = {
            userInfoRegister: {
                fullname: 'www',
                email: '',
                graduationYear: '',
                password: '',
                confirmPassword: ''
            }
        }

        this.fullNameRef = React.createRef()
        this.emailInputRef = React.createRef();
        this.graduationRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.confirmPasswordRef = React.createRef();
        this.scrollRef = React.createRef();

        this.register = this.register.bind(this);
        this.focusTextInputEmail = this.focusTextInputEmail.bind(this);
        this.focusTextInputGraduation = this.focusTextInputGraduation.bind(this);
        this.focusTextInputPassword = this.focusTextInputPassword.bind(this);
        this.gotoForgotScreen = this.gotoForgotScreen.bind(this);
        this.gotoRegisterScreen = this.gotoRegisterScreen.bind(this);
        this.focusTextInputConfirmPassword = this.focusTextInputConfirmPassword.bind(this);
        this.gotoLoginScreen = this.gotoLoginScreen.bind(this);
    }

    register() {
        const fullname = this.fullNameRef.current.state.value;
        const email = this.emailInputRef.current.state.value;
        const graduationYear = this.graduationRef.current.state.value;
        const password = this.passwordInputRef.current.state.value;
        const confirmPassword = this.confirmPasswordRef.current.state.value;


        if (fullname === '' || fullname.length < 4) {
            alert('The full name must be over 2 words');
            return;
        }
        if (email === '') {
            alert('Email not empty !')
            return;
        }
        if (graduationYear === '') {
            alert('Graduation Year not empty !')
            return;
        }
        if (password === '' || password.length < 4) {
            alert('The password must be over 4 words !')
            return;
        }
        if (confirmPassword === '' || confirmPassword.length < 4) {
            alert('The confirm password must be over 4 words !')
            return;
        }
        if (!validateEmail(email)) {
            alert('Wrong Email');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password and confirm password not match ! ');
            return;
        }
        Keyboard.dismiss();
        this.props.actions.app.registerUser({
            fullname,
            email,
            graduationYear: parseInt(graduationYear),
            password
        });
    }

    focusTextInputConfirmPassword() {
        this.confirmPasswordRef.current.onFocusTextInput();
    }

    focusTextInputEmail() {
        this.emailInputRef.current.onFocusTextInput();
    }

    focusTextInputGraduation() {
        this.graduationRef.current.onFocusTextInput();
    }

    focusTextInputPassword() {
        this.passwordInputRef.current.onFocusTextInput();
    }

    gotoLoginScreen() {
        this.props.navigation.navigate('Login');
    }

    gotoForgotScreen() {
        this.props.navigation.navigate('ForgotPassword');
    }

    gotoRegisterScreen() {
        alert('gotoRegisterScreen')
    }

    scrollTo(number) {
        this.scrollRef.current.scrollTo({ x: 0, y: number, animated: true })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isRegisterApp && prevProps.isRegisterApp !== this.props.isRegisterApp) {
            this.props.navigation.navigate('Login', {
                isShowCheckEmail: true
            });
            this.props.actions.app.resetStateRegister();
        }
    }

}

const mapStateToProps = state => ({
    loadingRegister: state.app.loadingRegister,
    isRegisterApp: state.app.isRegisterApp,
    messageRegisterError: state.app.messageRegisterError
})

export default connectRedux(mapStateToProps, RegisterScreen);