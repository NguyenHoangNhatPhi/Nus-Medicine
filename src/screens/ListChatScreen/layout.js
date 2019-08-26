import React from 'react';
import {
    View,
    ImageBackground,
    ScrollView
} from 'react-native';

import { HeaderScreen, Text, Loading, TextInputCustom, BackgroundView, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const MESSAGE = require('../../resources/message.png');

export default class Layout extends React.Component {

    render() {
        const { listSearch, navigation } = this.props;
        const titleList = navigation.getParam('titleList', 'ALUMNI SEARCH');
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    {/* ====== Title ====== */}
                    <View style={{
                        height: scaleSzie(40), justifyContent: 'center', alignItems: 'center',
                        backgroundColor: Configs.ORANGE
                    }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                            {titleList}
                        </Text>
                    </View>
                    <View style={{ flex: 1, }} >
                        <ScrollView>
                            {
                                listSearch.map((user, index) => <ItemUserChat
                                    key={index}
                                    user={user}
                                    onPress={() => this.setUpRoomChat(user)}
                                />)
                            }
                            <View style={{ height: scaleSzie(100) }} >
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </BackgroundView>
        );
    }
}

class ItemUserChat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        const { user } = this.state;
        const temptUser = { ...user, messageUnread: '' };
        this.setState({
            user: temptUser
        })
        this.props.onPress()
    }

    render() {
        const { user } = this.state;
        const messageUnread = user.messageUnread ? user.messageUnread : '';
        return (
            <Button onPress={this.onPress} style={{
                width: Configs.FULL_WIDTH, height: scaleSzie(60),
                flexDirection: 'row', borderBottomColor: '#fff', borderBottomWidth: 0.5
            }} >
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: scaleSzie(12) }} >
                    <Text style={{ color: '#fff', fontSize: scaleSzie(18), fontWeight: 'bold' }} >
                        {user.fullname}
                    </Text>
                </View>
                <View style={{
                    justifyContent: 'center', paddingHorizontal: scaleSzie(10)
                }} >
                    <ImageBackground source={MESSAGE} style={{
                        width: scaleSzie(30), height: scaleSzie(30),
                        justifyContent: 'center', alignItems: 'center', paddingBottom: scaleSzie(4)
                    }} >
                        <Text style={{ color: '#fff', fontSize: scaleSzie(16), fontWeight: 'bold' }} >
                            {`${messageUnread}`}
                        </Text>
                    </ImageBackground>
                </View>
            </Button>
        );
    }
}


