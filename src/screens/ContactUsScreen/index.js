import React from 'react';
import { Keyboard } from 'react-native';
import _ from 'ramda';

import Layout from './layout';
import { validateEmail, openBrowser } from '../../utils/func';
import connectRedux from '../../redux/ConnectRedux';


class ContactUsScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.emailInputRef = React.createRef();
        this.contentInputRef = React.createRef();
        this.sendMessage = this.sendMessage.bind(this);
        this.focusTextInputContent = this.focusTextInputContent.bind(this);
    }

    componentDidMount() {
        const { profile } = this.props;
        if (!_.isEmpty(profile)) {
            const { email } = profile;
            this.emailInputRef.current.setStateFromParent(email)
        }

    }

    sendMessage() {
        const email = this.emailInputRef.current.state.value;
        const { dispatch } = this.props.navigation;

        if (!validateEmail(email)) {
            alert('Wrong Email');
            return;
        }
        if (this.state.content.length < 10) {
            alert('The message must contain at least 10 characters !');
            return;
        }
        this.props.actions.app.contactUs({
            email,
            message: this.state.content
        }, dispatch)
    }

    focusTextInputContent() {
        this.contentInputRef.current.focus();
    }

    gotoSocial(urlSocial) {
        openBrowser(urlSocial);
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.sendContactUsSuccess && prevProps.isLoadingContactUs !== this.props.isLoadingContactUs) {
            Keyboard.dismiss();
            // await this.setState({
            //     content: ''
            // });

        }
    }

}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isLoadingContactUs: state.app.isLoadingContactUs,
    statusContactUs: state.app.statusContactUs,
    sendContactUsSuccess: state.app.sendContactUsSuccess
})

export default connectRedux(mapStateToProps, ContactUsScreen);
