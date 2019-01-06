import React from 'react';

import Layout from './layout';

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


}


export default LoginScreen;