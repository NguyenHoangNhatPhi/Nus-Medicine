import React from 'react';
import {Keyboard} from 'react-native';

import connectRedux from '../../redux/ConnectRedux';
import Layout from './layout';
import { validateEmail } from '../../utils/func';

class ChangePasswordScreen extends Layout {
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

        this.oldPasswordInputRef = React.createRef();
        this.newPasswordInputRef = React.createRef();
        this.confirmNewPasswordInputRef = React.createRef();
        this.scrollRef = React.createRef();

        this.changePassword = this.changePassword.bind(this);

        this.focusTextInputNewPassword = this.focusTextInputNewPassword.bind(this);
        this.focusTextInputConfirmNewPassword = this.focusTextInputConfirmNewPassword.bind(this);

    }

    changePassword() {
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

        if(password !== confirmPassword){
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

    focusTextInputConfirmNewPassword() {
        this.confirmNewPasswordInputRef.current.onFocusTextInput();
    }

    focusTextInputNewPassword() {
        this.newPasswordInputRef.current.onFocusTextInput();
    }

    scrollTo(number) {
        this.scrollRef.current.scrollTo({ x: 0, y: number, animated: true })
    }


}

const mapStateToProps = state => ({
    loadingRegister : state.app.loadingRegister,
    messageRegisterError:state.app.messageRegisterError
})

export default connectRedux(mapStateToProps, ChangePasswordScreen);