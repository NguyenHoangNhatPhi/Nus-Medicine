import React from 'react';
import {
    View,
    TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';

export default class Layout extends React.Component {

    renderFooter() {
        return (
            <View style={styles.containerFooter} >
                <View style={styles.footer} >
                    <View style={{ flex: 1.5, backgroundColor: 'red' }} >

                    </View>
                    <View style={{ width: scaleSzie(10) }} />
                    <View style={styles.containerPick} >
                        <View style={{justifyContent:'center'}} >
                            <Ionicons name="md-calendar" size={25} color="#fff" />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#fff', fontSize: scaleSzie(18), fontWeight: 'bold' }} >
                                Pick
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
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
                            NUS Medicine offers a wide range of reunion
                            services especially customised to support your
                            class reunion.
                        </Text>
                        <Text style={styles.textContent} >
                            Let us know your reunion date and we will
                            contact you shortly
                        </Text>
                        <View style={{ height: scaleSzie(20) }} />
                        {this.renderFooter()}
                    </View>
                </View>
            </View>
        );
    }
}