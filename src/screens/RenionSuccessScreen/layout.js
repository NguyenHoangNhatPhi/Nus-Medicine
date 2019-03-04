import React from 'react';
import {
    View,
    DatePickerIOS,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HeaderScreen, Text, ModalCustom, Button, BackgroundView, Loading } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';

export default class Layout extends React.Component {

    render() {
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                            CLASS REUNION CONCIERGE
                    </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <Text style={[styles.textContent, { marginBottom: scaleSzie(30) }]} >
                                Thank you for your Class Reunion request. We will get in touch with you within 1 - 3 working days.
                        </Text>
                        </View>
                    </View>
                </View>
            </BackgroundView>
        );
    }
}