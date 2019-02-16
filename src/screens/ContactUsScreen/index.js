import React from 'react';
import { Linking } from 'react-native';
import _ from 'ramda';

import Layout from './layout';
import { validateEmail } from '../../utils/func';
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
        if (!validateEmail(email)) {
            alert('Wrong Email');
            return;
        }
        if (this.state.content.length < 10) {
            alert('The content must at least 10 words !');
            return;
        }
        this.props.actions.app.contactUs({
            email,
            message: this.state.content
        })
    }

    focusTextInputContent() {
        this.contentInputRef.current.focus();
    }

    gotoSocial(urlSocial) {
        Linking.canOpenURL(urlSocial).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(urlSocial);
            }
        }).catch(err => console.error('An error occurred', err));
    }

}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    isLoadingContactUs : state.app.isLoadingContactUs,
    statusContactUs: state.app.statusContactUs
})

export default connectRedux(mapStateToProps, ContactUsScreen);
