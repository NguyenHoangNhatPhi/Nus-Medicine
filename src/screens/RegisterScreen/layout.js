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
                        Register
                    </Text>
                </View>
                <View style={styles.containerCard} >
                    <View style={styles.containerForm} >
                        <TextInputCustom
                            ref={this.emailInputRef}
                            placeholder="Full Name"
                            onSubmitEditing={this.focusTextInputPassword}
                        />
                        <View style={{ height: scaleSzie(20) }} />
                        <TextInputCustom
                            ref={this.passwordInputRef}
                            placeholder="Email"
                            onSubmitEditing={this.login}
                        />
                        <View style={{ height: scaleSzie(20) }} />
                        <TextInputCustom
                            ref={this.passwordInputRef}
                            placeholder="Graduation Year (eg. 1989)"
                            onSubmitEditing={this.login}
                        />
                        <View style={{ height: scaleSzie(20) }} />
                        <TextInputCustom
                            ref={this.passwordInputRef}
                            placeholder="Password"
                            onSubmitEditing={this.login}
                        />
                        <View style={{ height: scaleSzie(40) }} />
                        <ButtonSubmit
                            onPress={this.login}
                            title="Register"
                        />
                        <View style={{ marginTop: scaleSzie(25), flexDirection: 'row', justifyContent: 'center' }} >
                            <Button onPress={this.gotoForgotScreen} >
                                <Text style={styles.textFormLogin} >
                                    {`Already Registerd?`}
                            </Text>
                            </Button>
                            <Text style={[styles.textFormLogin,{textDecorationLine:'underline'} ]} >
                                {` Log In `}
                            </Text>
                            <Button onPress={this.gotoRegisterScreen} >
                                <Text style={styles.textFormLogin} >
                                    {`Here`}
                            </Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}