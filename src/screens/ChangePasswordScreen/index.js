import React from 'react';
import { Keyboard } from 'react-native';

import connectRedux from '../../redux/ConnectRedux';
import Layout from './layout';
import { validateEmail } from '../../utils/func';

class ChangePasswordScreen extends Layout {
    constructor(props) {
        super(props);

        this.state = {
            userInfoRegister: {
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: ''
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
        const oldPassword = this.oldPasswordInputRef.current.state.value;
        const newPassword = this.newPasswordInputRef.current.state.value;
        const confirmNewPassword = this.confirmNewPasswordInputRef.current.state.value;


        if (oldPassword === '' || oldPassword.length < 4) {
            alert('The old password must be over 4 words !')
            return;
        }
        if (newPassword === '' || newPassword.length < 4) {
            alert('The new confirm password must be over 4 words !')
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert('The new Password and confirm new password not match ! ');
            return;
        }
        Keyboard.dismiss();
        const {dispatch} = this.props.navigation;
        this.props.actions.app.changePassword({
            oldPassword,
            newPassword
        },dispatch);
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
    isLoadingChangePassword: state.app.isLoadingChangePassword,
    messageChangePassword: state.app.messageChangePassword
})

export default connectRedux(mapStateToProps, ChangePasswordScreen);