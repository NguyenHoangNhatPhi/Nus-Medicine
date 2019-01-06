import React from 'react';
import {
    View,
    Image
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

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
                <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '600', }} >
                        NUS MEDICINE ALUMNI
                    </Text>
                </View>
                <View style={styles.containerContent} >
                    <Image source={USER_GRADUATION} style={{ width: scaleSzie(45), height: (45) }} />
                    <Text style={styles.textHomePage} >
                        CLASS REUNION CONCIERGE
                    </Text>
                    <Entypo name="hand" size={40} color="#fff" />
                    <Text style={styles.textHomePage} >
                        GIVING PORTAL
                    </Text>
                    <Image source={CHAT} style={{ width: scaleSzie(45), height: (45) }} />
                    <Text style={styles.textHomePage} >
                       MESSAGING
                    </Text>
                    <Entypo name="info-with-circle" size={40} color="#fff" />
                    <Text style={styles.textHomePage} >
                       USEFUL INFO
                    </Text>
                </View>
            </View>
        );
    }
}