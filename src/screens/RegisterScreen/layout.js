import React from 'react';
import {
    View,
} from 'react-native';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';

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
                        <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false}
                        >
                            <TextInputCustom
                                ref={this.fullNameRef}
                                placeholder="Full Name"
                                onSubmitEditing={this.focusTextInputEmail}
                            />
                            <View style={{ height: scaleSzie(20) }} />
                            <TextInputCustom
                                ref={this.emailInputRef}
                                placeholder="Email"
                                onSubmitEditing={this.focusTextInputGraduation}
                            />
                            <View style={{ height: scaleSzie(20) }} />
                            <TextInputCustom
                                ref={this.graduationRef}
                                placeholder="Graduation Year (eg. 1989)"
                                onSubmitEditing={this.focusTextInputPassword}
                            />
                            <View style={{ height: scaleSzie(20) }} />
                            <TextInputCustom
                                ref={this.passwordInputRef}
                                placeholder="Password"
                                onSubmitEditing={this.register}
                            />
                            <View style={{ height: scaleSzie(40) }} />
                            <ButtonSubmit
                                onPress={this.register}
                                title="Register"
                            />
                            <View style={{ marginTop: scaleSzie(25), flexDirection: 'row', justifyContent: 'center' }} >
                                <Text style={styles.textFormLogin} >
                                    {`Already Registerd?`}
                                </Text>

                                <Button onPress={this.gotoLoginScreen} >
                                    <Text style={[styles.textFormLogin, { textDecorationLine: 'underline', textDecorationStyle: "solid", }]} >
                                        {` Log In `}
                                    </Text>
                                </Button>
                                <Text style={styles.textFormLogin} >
                                    {`Here`}
                                </Text>
                            </View>
                            <View style={{height:scaleSzie(200)}} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}