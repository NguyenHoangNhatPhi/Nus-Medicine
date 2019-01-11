import React from 'react';
import {
    Keyboard
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Layout from './layout';

class ChatScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            visibleEmoji: false,
            messages: [
                {
                    _id: 1,
                    text: 'Hello Phi',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 2,
                    text: 'Hi',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ]
        }
        this.gotoRenuion = this.gotoRenuion.bind(this);
        this.onSend = this.onSend.bind(this);
        this.keyboardWillShow = this.keyboardWillShow.bind(this);
        this.keyboardDidHide = this.keyboardDidHide.bind(this);
        this.showshowEmotion = this.showshowEmotion.bind(this);
        this.addEmoji = this.addEmoji.bind(this);
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    addEmoji(emoji) {
        this.setState(prevState => ({
            value: `${prevState.value} ${emoji}`
        }))
    }

    keyboardWillShow() {
        // console.log('Keyboard Shown');
        // this.setState({
        //     visibleEmoji: false
        // })
    }

    keyboardDidHide() {
        console.log('Keyboard Hidden');
    }

    showshowEmotion() {
        Keyboard.dismiss();
        this.setState({
            visibleEmoji: true
        })
    }

    gotoRenuion() {
        alert('ddd')
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }


}


export default ChatScreen;