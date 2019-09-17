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
        const titleList = navigation.getParam('titleList', 'ALUMNI SEARCH');

        this.props.io.emit('PRIVATE_MESSAGE', ({
            sender: { socketId: profile.socketId, email: profile.email },
            receiver: { socketId: userChat.socketId, email: userChat.email }, message: ''
        }));

        this.state = {
            value: '',
            temptHeightEmoji: 0,
            zIndex: -1,
            isUpdateListfriends: true,
            isCheckUpdateListFriends: titleList === 'CHAT HISTORY' ? true : false

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
        const { currentUserChat, navigation } = this.props;
        const { dispatch } = this.props.navigation;
        const temptCurrentUserChat = navigation.getParam('temptCurrentUserChat', { email: '' });
        const checkCurrentUserChat = currentUserChat.email ? currentUserChat : temptCurrentUserChat
        this.props.actions.chat.setFlagChatScreen(true);
        this.props.actions.chat.getHistoryChat(checkCurrentUserChat.email, dispatch);
        this.setupUserChatSocket();
    }

    setupUserChatSocket() {
        const { currentUserChat, isAtChatScreen } = this.props;
        this.props.io.on(`RECONNECT_SOCKET_${currentUserChat.email}`, data => {
            //  console.log(`------RECONNECT_SOCKET_${this.props.currentUserChat.email} : `, data);
            if (currentUserChat.email === data.email) {
                this.props.actions.chat.updateCurrentUserChat(data);
            }
           
            // if (isAtChatScreen && currentUserChat.email === data.email
            // ) {
            //     console.log('+++++ : ',isAtChatScreen)
            //     this.props.actions.chat.updateCurrentUserChat(data);
            // }else{
            //     console.log('------ : ',isAtChatScreen)
            // }
        })
    }

    back = () => {
        this.props.navigation.goBack();
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

    onSend(messagesSend = []) {
        const { profile, currentUserChat, messages } = this.props;
        const { dispatch } = this.props.navigation;

        // if (this.state.isUpdateListfriends && this.state.isCheckUpdateListFriends) {
        //     this.props.actions.chat.updateAt({
        //         email: currentUserChat.email
        //     }, dispatch);
        //     this.setState({
        //         isUpdateListfriends: false
        //     })
        // }

        if (messages.length === 0) {
            this.props.actions.chat.addFriend({
                email: currentUserChat.email
            }, dispatch);
        }
        this.props.io.emit('PRIVATE_MESSAGE', ({
            sender: { socketId: profile.socketId, email: profile.email, fullname: profile.fullname },
            receiver: { socketId: currentUserChat.socketId, email: currentUserChat.email, fullname: currentUserChat.fullname }, message: messagesSend[0].text
        }));
    }

    loadmoreMessage = () => {
        const { page, totalPage, currentUserChat, isLoadingEarlier } = this.props;
        const { dispatch } = this.props.navigation;

        if (!isLoadingEarlier) {
            if ((page + 1) <= totalPage) {
                this.props.actions.chat.loadmoreChat(currentUserChat.email, (page + 1), dispatch);
            }
        }
    }


    componentWillUnmount() {
        // const {dispatch} = this.props.navigation;
        // this.props.actions.chat.getHistoryChat(this.props.currentUserChat.email, dispatch);
        this.props.actions.chat.setFlagChatScreen(false);
        this.props.actions.chat.resetMessage();
    }

}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
    io: state.app.io,
    messages: state.chat.messages,
    currentUserChat: state.chat.currentUserChat,
    loadingGetHistory: state.chat.loadingGetHistory,
    page: state.chat.page,
    totalPage: state.chat.totalPage,
    isLoadingEarlier: state.chat.isLoadingEarlier,
    isAtChatScreen: state.chat.isAtChatScreen,
})

export default connectRedux(mapStateToProps, ChatScreen);
