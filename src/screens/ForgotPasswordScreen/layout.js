import React from 'react';
import {
    View,
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button, BackgroundView, Loading } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

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
                            <View style={{ height: scaleSzie(50), justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ color: 'red', fontSize: scaleSzie(14), fontWeight: 'bold' }} >
                                    {this.props.messageForgotPasswordError}
                                </Text>
                            </View>
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
                <Loading visible={this.props.isLoadingForgotPassword} />
                <Toast
                    ref={this.toastRef}
                    position='center'
                    fadeInDuration={2000}
                    fadeOutDuration={1000}
                    opacity={1}
                />
            </BackgroundView>
        );
    }
}