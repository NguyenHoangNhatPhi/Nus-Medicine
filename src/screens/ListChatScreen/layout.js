import React from 'react';
import {
    View,
    ImageBackground
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { HeaderScreen, Text, Loading, TextInputCustom, BackgroundView, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const MESSAGE = require('../../resources/message.png');

export default class Layout extends React.Component {

    render() {
        const { listSearch } = this.props;
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    {
                        listSearch.map((user, index) => <ItemUserChat
                            name={user.fullname}
                            onPress={() => this.setUpRoomChat(user)}
                        />)
                    }
                </View>
            </BackgroundView>
        );
    }
}


const ItemUserChat = props => {
    return (
        <Button onPress={() => props.onPress()} style={{
            width: Configs.FULL_WIDTH, height: scaleSzie(60),
            flexDirection: 'row', borderBottomColor: '#fff', borderBottomWidth: 0.5
        }} >
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: scaleSzie(12) }} >
                <Text style={{ color: '#fff', fontSize: scaleSzie(18), fontWeight: 'bold' }} >
                    {props.name}
                </Text>
            </View>
            <View style={{
                justifyContent: 'center', paddingHorizontal: scaleSzie(10)
            }} >
                <ImageBackground source={MESSAGE} style={{
                    width: scaleSzie(30), height: scaleSzie(30),
                    justifyContent: 'center', alignItems: 'center'
                }} >
                    <Text style={{ color: '#fff', fontSize: scaleSzie(16), fontWeight: 'bold' }} >
                        1
                </Text>
                </ImageBackground>
            </View>
        </Button>
    );
}