import React from 'react';
import { Linking } from 'react-native';

import Layout from './layout';

class ClassReunionScreen extends Layout {
    constructor(props) {
        super(props);

        this.emailInputRef = React.createRef();
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        alert('ddd')
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


export default ClassReunionScreen;