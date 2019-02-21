import React from 'react';
import {
    Keyboard
} from 'react-native';
import { GiftedChat } from '../../components/react-native-gifted-chat';

import connectRedux from '../../redux/ConnectRedux';
import Layout from './layout';
import { scaleSzie } from '../../utils/func';

// sender: { email: '', socketId: ''}
// receiver: { email: '', socketId: ''}
// message: 'text'

class ChatScreen extends Layout {
    constructor(props) {
        super(props);
        const { navigation, profile } = this.props;
        const userChat = navigation.getParam('userChat', {});

        this.props.io.emit('PRIVATE_MESSAGE', ({
            sender: { socketId: profile.socketId, email: profile.email },
            receiver: { socketId: userChat.socketId, email: userChat.email }, message: ''
        }));
        // this.props.io.on('REPLY_PRIVATE_MESSAGE', function(message) {
        //     if (message && message.message) {
        //         console.log(JSON.stringify(this.props));
        //         const temptMessage = [{
        //             _id: message.time,
        //             text: message.message,
        //             createdAt: message.time,
        //             user: {
        //                 _id: message.isSender ? 1 : 2,
        //                 avatar: 'https://placeimg.com/140/140/any',
        //             }
        //         }]
        //         this.props.actions.chat.addMessage(temptMessage);
        //         this.setState(previousState => ({
        //             messages: GiftedChat.append(previousState.messages, temptMessage),
        //         }))
        //     }
        // });

        this.state = {
            value: '',
            temptHeightEmoji: 0,
            zIndex: -1,
            
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

    addMessage(){
        alert('ddd')
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
        // alert('ddd')
        // Keyboard.dismiss();
        // const temptHeightEmoji = this.state.temptHeightEmoji === 0 ? scaleSzie(240) : this.state.temptHeightEmoji
        // this.emojiRef.current.setHeightEmoji(temptHeightEmoji);
    }

    gotoRenuion() {
    }

    onSend(messages = []) {
        const { navigation, profile } = this.props;
        const userChat = navigation.getParam('userChat', {});

        this.props.io.emit('PRIVATE_MESSAGE', ({
            sender: { socketId: profile.socketId, email: profile.email },
            receiver: { socketId: userChat.socketId, email: userChat.email }, message: messages[0].text
        }));
       
    }

}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    io: state.app.io,
    messages: state.chat.messages
})

export default connectRedux(mapStateToProps, ChatScreen);
