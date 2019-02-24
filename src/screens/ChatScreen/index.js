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

    componentDidMount() {
        this.props.actions.chat.setFlagChatScreen(true);
        this.props.actions.chat.getHistoryChat('phinhn2201@gmail.com');
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
        // if (this.emojiRef.current.state.containerHeight !== 0) {
        //     this.emojiRef.current.setHeightEmoji(0);
        //     await this.setState(prevState => ({
        //         value: `${prevState.value} `,
        //     }), () => {
        //         if (this.state.temptHeightEmoji === 0) {
        //             this.setState({ temptHeightEmoji: heightKeyboard })
        //         }
        //     });
        // }
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
        const { navigation, profile, currentUserChat } = this.props;

        this.props.io.emit('PRIVATE_MESSAGE', ({
            sender: { socketId: profile.socketId, email: profile.email, fullname: profile.fullname },
            receiver: { socketId: currentUserChat.socketId, email: currentUserChat.email, fullname: currentUserChat.fullname }, message: messages[0].text
        }));
    }

    loadmoreMessage() {
        this.props.actions.chat.loadmore();
    }

    componentWillUnmount() {
        this.props.actions.chat.setFlagChatScreen(false);
    }

}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    io: state.app.io,
    messages: state.chat.messages,
    currentUserChat: state.chat.currentUserChat,
    loadingGetHistory: state.chat.loadingGetHistory,
    page: state.chat.page,
    totalPage: state.chat.totalPage
})

export default connectRedux(mapStateToProps, ChatScreen);
