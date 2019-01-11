import React from 'react';
import {
    View,
    Image,
    TextInput
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { GiftedChat } from '../../components/react-native-gifted-chat';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import EmojiPicker from '../../components/Emoji';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const CHAT = require('../../resources/chat.png');

export default class Layout extends React.Component {

    renderFooter(props) {
        return (
            <View style={{
                width: Configs.FULL_WIDTH, backgroundColor: 'red',
            }} >
                <AutoGrowingTextInput style={styles.textInput}
                    placeholder={'Your Message'}
                    maxHeight={200}
                    minHeight={45}
                />
            </View>
        );
    }

    render() {
        const { value, visibleEmoji } = this.state;
        return (
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                />
                <View style={styles.containerContent} >
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={this.onSend}
                        user={{
                            _id: 1,
                        }}
                        onInputTextChanged={value => this.setState({ value })}
                        text={value}
                        showEmotion={this.showshowEmotion}
                    />
                    {
                        visibleEmoji ? <EmojiPicker
                            onPick={this.addEmoji}
                        /> : <View   />
                    }

                </View>
            </View>
        );
    }
}