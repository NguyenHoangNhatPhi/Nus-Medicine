import React from 'react';
import {
    View,
    Image
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { GiftedChat } from 'react-native-gifted-chat';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const CHAT = require('../../resources/chat.png');

export default class Layout extends React.Component {

    render() {
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
                    />
                </View>
            </View>
        );
    }
}