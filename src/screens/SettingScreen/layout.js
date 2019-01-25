import React from 'react';
import {
    View,
    Text,
    
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Button} from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';

export default class Layout extends React.Component {

    renderRowContact() {
        const nameIcon= this.props.isSettingContactable ? "md-checkbox" : "md-square-outline"
        return (
            <Button onPress={this.changeSettingContact} style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: scaleSzie(16), }} >
                    <Text style={styles.textTitle} >
                        Contactable
                </Text>
                    <Text style={styles.textDesc} >
                        Allow other alumini to contact me via chat
                </Text>
                </View>
                <View style={{ width: scaleSzie(45), justifyContent: 'center' }} >
                    <Ionicons name={nameIcon} size={25} color='rgb(0,127,122)' />
                </View>
            </Button>
        );
    }

    renderRowNoti() {
        const nameIcon= this.props.isSettingNoti ? "md-checkbox" : "md-square-outline"
        return (
            <Button onPress={this.changeSettingNoti} style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: scaleSzie(16), }} >
                    <Text style={styles.textTitle} >
                        News and announcements
                </Text>
                    <Text style={styles.textDesc} >
                        Enable pop-up notifications
                </Text>
                </View>
                <View style={{ width: scaleSzie(45), justifyContent: 'center' }} >
                    <Ionicons name={nameIcon} size={25} color='rgb(0,127,122)' />
                </View>
            </Button>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textSetting} >
                    My Settings
                </Text>
                <Text style={[styles.textSetting, {
                    color: 'rgb(33,33,33)', marginTop: scaleSzie(20),
                    marginBottom: scaleSzie(20)
                }]} >
                    My Profile
                </Text>
                <View style={styles.containerContent} >
                    {this.renderRowContact()}
                    <View style={styles.line} />
                    {this.renderRowNoti()}
                </View>
            </View>
        );
    }
}