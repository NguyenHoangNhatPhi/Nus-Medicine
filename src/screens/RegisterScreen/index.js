import React from 'react';

import Layout from './layout';

class RegisterScreen extends Layout {
    constructor(props) {
        super(props);

        this.fullNameRef = React.createRef()
        this.emailInputRef = React.createRef();
        this.graduationRef = React.createRef();
        this.passwordInputRef = React.createRef();

        this.register = this.register.bind(this);
        this.focusTextInputEmail= this.focusTextInputEmail.bind(this);
        this.focusTextInputGraduation =this.focusTextInputGraduation.bind(this);
        this.focusTextInputPassword = this.focusTextInputPassword.bind(this);
        this.gotoForgotScreen = this.gotoForgotScreen.bind(this);
        this.gotoRegisterScreen = this.gotoRegisterScreen.bind(this);

        this.gotoLoginScreen = this.gotoLoginScreen.bind(this);
    }

    register() {
        alert('register')
    }

    focusTextInputEmail(){
        this.emailInputRef.current.onFocusTextInput();
    }

    focusTextInputGraduation(){
        this.graduationRef.current.onFocusTextInput();
    }

    focusTextInputPassword() {
        this.passwordInputRef.current.onFocusTextInput();
    }

    gotoLoginScreen(){
        this.props.navigation.navigate('Login');
    }

    gotoForgotScreen() {
        this.props.navigation.navigate('ForgotPassword');
    }

    gotoRegisterScreen() {
        alert('gotoRegisterScreen')
    }


}


export default RegisterScreen;