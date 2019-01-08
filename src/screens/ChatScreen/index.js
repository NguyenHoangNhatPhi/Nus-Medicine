import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';


import Layout from './layout';

class ChatScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 2,
                    text: 'Hello developer',
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