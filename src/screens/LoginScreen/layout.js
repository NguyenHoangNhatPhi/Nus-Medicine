import React from 'react';
import {
    View,
    Button,
    StatusBar
} from 'react-native';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';

export default class Layout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderScreen />
                <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                        Log In
                    </Text>
                </View>
                <View style={styles.containerCard} >
                    <View style={styles.containerForm} >
                        <TextInputCustom
                            placeholder="Email"
                        />
                          <View style={{ height: scaleSzie(20) }} />
                         <TextInputCustom
                            placeholder="Password"
                        />
                        <View style={{ height: scaleSzie(40) }} />
                        <ButtonSubmit
                            onPress={this.login}
                            title="Log In"
                        />
                    </View>
                </View>
            </View>
        );
    }
}