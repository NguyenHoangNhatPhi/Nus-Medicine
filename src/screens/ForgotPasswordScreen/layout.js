import React from 'react';
import {
    View,
} from 'react-native';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

export default class Layout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderScreen
                navigation={this.props.navigation}
                />
                <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                        Forgot Password
                    </Text>
                </View>
                <View style={styles.containerCard} >
                    <View style={styles.containerForm} >
                        <TextInputCustom
                            ref={this.emailInputRef}
                            placeholder="Email"
                            onSubmitEditing={this.resetPassword}
                        />
                        <View style={{ height: scaleSzie(20) }} />
                        <ButtonSubmit
                            onPress={this.resetPassword}
                            title="Send Reset Password Link"
                        />
                        <View style={{ marginTop: scaleSzie(25), flexDirection: 'row', justifyContent: 'center' }} >
                            <Button onPress={this.gotoContactScreen} >
                                <Text style={styles.textFormLogin} >
                                    Having problems? Please contact us
                            </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}