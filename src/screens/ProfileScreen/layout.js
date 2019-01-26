import React from 'react';
import {
    View,
    Text,

} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';



import { Button, HeaderScreen, AutoGrowingTextInput } from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';
import Configs from '../../configs';

export default class Layout extends React.Component {

    renderEditProfile() {
        const { disableEditProfile } = this.state;
        if (disableEditProfile) {
            return (
                <View style={{ width: Configs.FULL_WIDTH, flexDirection: 'row', height: scaleSzie(75) }} >
                    <Button onPress={this.editProfile} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                        <Feather name="edit" size={16} color={Configs.ORANGE} />
                        <Text style={[styles.textSetting, {
                            marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE, fontWeight: '400',
                            textDecorationLine: "underline"
                        }]} >
                            Edit Profile
                        </Text>
                    </Button>
                    {/* ====== Line ======= */}
                    <View style={{ width: 1, paddingVertical: 25 }} >
                        <View style={{ flex: 1, backgroundColor: 'rgb(147,147,147)' }} />
                    </View>
                    <Button onPress={this.gotoChangePassword} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                        <Entypo name="key" size={16} color={Configs.ORANGE} />
                        <Text style={[styles.textSetting, {
                            marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE,
                            fontWeight: '400', textDecorationLine: "underline"
                        }]} >
                            Change Password
                        </Text>
                    </Button>
                </View>
            );
        }
        return (
            <View style={{ width: Configs.FULL_WIDTH, flexDirection: 'row', height: scaleSzie(75) }} >
                <Button onPress={this.cancleEditProfile} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                    <Ionicons name="md-undo" size={16} color={Configs.ORANGE} />
                    <Text style={[styles.textSetting, {
                        marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE, fontWeight: '400',
                        textDecorationLine: "underline"
                    }]} >
                        Cancle
                    </Text>
                </Button>
                {/* ====== Line ======= */}
                <View style={{ width: 1, paddingVertical: 25 }} >
                    <View style={{ flex: 1, backgroundColor: 'rgb(147,147,147)' }} />
                </View>
                <Button onPress={this.submitEditProfile} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
                    <Feather name="save" size={16} color={Configs.ORANGE} />
                    <Text style={[styles.textSetting, {
                        marginTop: 0, marginLeft: scaleSzie(8), color: Configs.ORANGE,
                        fontWeight: '400', textDecorationLine: "underline"
                    }]} >
                        Save
                    </Text>
                </Button>
            </View>
        );
    }

    render() {
        const { disableEditProfile } = this.state;
        return (
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                />
                <Text style={styles.textSetting} >
                    My Profile
                </Text>
                <View style={{ height: scaleSzie(80) }} >
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scaleSzie(16) }} >
                        <AutoGrowingTextInput
                            placeholder={'Full Name'}
                            value={'Phi'}
                            disable={disableEditProfile}
                        />
                    </View>
                </View>
                <View style={styles.containerContent} >
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scaleSzie(16) }} >
                        <AutoGrowingTextInput
                            placeholder={'Email'}
                            value={'abc@gmail.com'}
                            disable={disableEditProfile}
                        />
                    </View>
                    <View style={styles.line} />
                    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scaleSzie(16) }} >
                        <AutoGrowingTextInput
                            placeholder={'Graduation Year'}
                            value={'1990'}
                            disable={disableEditProfile}
                        />
                    </View>
                </View>
                {this.renderEditProfile()}
            </View>
        );
    }
}
