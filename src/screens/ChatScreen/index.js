import React from 'react';
import {
    Keyboard
} from 'react-native';
import { GiftedChat } from '../../components/react-native-gifted-chat';

import Layout from './layout';
import { scaleSzie } from '../../utils/func';

class ChatScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            temptHeightEmoji: 0,
            zIndex: -1,
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
        this.emojiRef = React.createRef();
        this.containerHeight = 0;

        this.gotoRenuion = this.gotoRenuion.bind(this);
        this.onSend = this.onSend.bind(this);
        this.showshowEmotion = this.showshowEmotion.bind(this);
        this.addEmoji = this.addEmoji.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.hideEmoji = this.hideEmoji.bind(this);
    }

    componentDidMount() {
    }

    addEmoji(emoji) {
        this.setState(prevState => ({
            value: `${prevState.value}${emoji}`
        }))
    }

    onChangeMessage(messages) {
        this.setState({
            value: messages,
        })
    }



    async  hideEmoji(heightKeyboard) {
        if (this.emojiRef.current.state.containerHeight !== 0) {
            this.emojiRef.current.setHeightEmoji(0);
            await this.setState(prevState => ({
                value: `${prevState.value} `,
            }), () => {
                if (this.state.temptHeightEmoji === 0) {
                    this.setState({ temptHeightEmoji: heightKeyboard })
                }
            });
        }
    }

    showshowEmotion() {
        Keyboard.dismiss();
        const temptHeightEmoji = this.state.temptHeightEmoji === 0 ? scaleSzie(240) : this.state.temptHeightEmoji
        this.emojiRef.current.setHeightEmoji(temptHeightEmoji);
    }

    gotoRenuion() {
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }


}


export default ChatScreen;