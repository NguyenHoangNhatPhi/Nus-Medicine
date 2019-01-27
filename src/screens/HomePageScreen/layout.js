import React from 'react';
import {
    View,
    Image
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { HeaderScreen, Text, BackgroundView, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const CHAT = require('../../resources/chat.png');

export default class Layout extends React.Component {

    render() {
        return (
            <BackgroundView>
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
                        <Button onPress={this.gotoRenuion} >
                            <Image source={USER_GRADUATION} style={{ width: scaleSzie(45), height: (45) }} />
                        </Button>
                        <Text style={styles.textHomePage} >
                            CLASS REUNION CONCIERGE
                    </Text>
                        <Button onPress={this.gotoRenuion} >
                            <Entypo name="hand" size={40} color="#fff" />
                        </Button>
                        <Text style={styles.textHomePage} >
                            GIVING PORTAL
                    </Text>
                        <Button onPress={this.gotoListChat} >
                            <Image source={CHAT} style={{ width: scaleSzie(45), height: (45) }} />
                        </Button>
                        <Text style={styles.textHomePage} >
                            MESSAGING
                    </Text>
                        <Button onPress={this.gotoRenuion} >
                            <Entypo name="info-with-circle" size={40} color="#fff" />
                        </Button>
                        <Text style={styles.textHomePage} >
                            USEFUL INFO
                    </Text>
                    </View>
                </View>
            </BackgroundView>
        );
    }
}