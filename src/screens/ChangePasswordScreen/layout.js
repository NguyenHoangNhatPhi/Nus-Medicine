import React from 'react';
import {
    View,
} from 'react-native';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, BackgroundView, Loading } from '../../components';
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
                            Change Password
                    </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <ScrollView
                                ref={this.scrollRef}
                                keyboardShouldPersistTaps="always"
                                showsVerticalScrollIndicator={false}
                            >
                                <TextInputCustom
                                    ref={this.oldPasswordInputRef}
                                    placeholder="Old Password"
                                    onSubmitEditing={this.focusTextInputNewPassword}
                                    secureTextEntry={true}
                                />
                                <View style={{ height: scaleSzie(20) }} />
                                <TextInputCustom
                                    ref={this.newPasswordInputRef}
                                    placeholder="New Password"
                                    onSubmitEditing={this.focusTextInputConfirmNewPassword}
                                    secureTextEntry={true}
                                    onFocus={() => this.scrollTo(scaleSzie(70))}
                                />
                                <View style={{ height: scaleSzie(20) }} />
                                <TextInputCustom
                                    ref={this.confirmNewPasswordInputRef}
                                    placeholder="Confirm New Password"
                                    onSubmitEditing={this.changePassword}
                                    secureTextEntry={true}
                                    onFocus={() => this.scrollTo(scaleSzie(70))}
                                />
                                <View style={{ height: scaleSzie(40), justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: 'red', fontSize: scaleSzie(14), fontWeight: 'bold' }} >
                                        {this.props.messageChangePassword}
                                    </Text>
                                </View>
                                <ButtonSubmit
                                    onPress={this.changePassword}
                                    title="Change Password"
                                />
                                <View style={{ height: scaleSzie(150) }} />
                            </ScrollView>
                        </View>
                    </View>
                    <Loading visible={this.props.isLoadingChangePassword} />
                </View>
            </BackgroundView>
        );
    }
}