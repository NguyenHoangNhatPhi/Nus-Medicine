import React from 'react';

import connectRedux from '../../redux/ConnectRedux';
import Layout from './layout';

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


        alert(fullname)

        // this.props.actions.app.registerUser({
        //     name: 'abc'
        // })
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

    scrollTo(number){
        this.scrollRef.current.scrollTo({x: 0, y: number, animated: true})
    }


}

const mapStateToProps = state => ({

})

export default connectRedux(mapStateToProps, RegisterScreen);