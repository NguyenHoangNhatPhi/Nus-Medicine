import React from 'react';
import {
    View,
} from 'react-native';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button, Loading } from '../../components';
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
                        Log In
                    </Text>
                </View>
                <View style={styles.containerCard} >
                    <View style={styles.containerForm} >
                        <TextInputCustom
                            ref={this.emailInputRef}
                            placeholder="Email"
                            onSubmitEditing={this.focusTextInputPassword}
                        />
                        <View style={{ height: scaleSzie(20) }} />
                        <TextInputCustom
                            ref={this.passwordInputRef}
                            placeholder="Password"
                            onSubmitEditing={this.login}
                        />
                        <View style={{ height: scaleSzie(40), justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: 'red', fontSize: scaleSzie(14), fontWeight: 'bold' }} >
                                {this.props.messageLoginError}
                            </Text>
                        </View>
                        <ButtonSubmit
                            onPress={this.login}
                            title="Log In"
                        />
                        <View style={{ marginTop: scaleSzie(25), flexDirection: 'row', justifyContent: 'center' }} >
                            <Button onPress={this.gotoForgotScreen} >
                                <Text style={styles.textFormLogin} >
                                    Forgot Password
                            </Text>
                            </Button>
                            <Text style={[styles.textFormLogin, { marginHorizontal: scaleSzie(17) }]} >
                                {`|`}
                            </Text>
                            <Button onPress={this.gotoRegisterScreen} >
                                <Text style={styles.textFormLogin} >
                                    Register
                            </Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <Loading visible={this.props.loadingLogin} />
            </View>
        );
    }
}