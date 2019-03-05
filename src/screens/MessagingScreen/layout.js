import React from 'react';
import {
    View,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { HeaderScreen, Text, ButtonSubmit, Loading, BackgroundView } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

const ICON_CHAT = require('../../resources/chat.png');
const USER_GRADUATION = require('../../resources/graduation.png');

export default class Layout extends React.Component {

    renderButtonGroupChat(title) {
        return (
            <View>
                <ButtonSubmit
                    onPress={this.searchUser}
                    title={title}
                />
                <View style={{ position: 'absolute', left: scaleSzie(15), top: scaleSzie(15) }} >
                    <FontAwesome name="group" size={20} color='#fff' />
                </View>
            </View>
        );
    }

    render() {
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                        menu={true}
                    />
                    {/* ====== Form ====== */}
                    <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                            MESSAGING
                        </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <View style={{ marginBottom: scaleSzie(15) }} >
                                <ButtonSubmit
                                    onPress={() => this.searchUserByYear()}
                                    title={`CLASS OFF ${this.props.profile.graduationYear}`}
                                />
                                <View style={{ position: 'absolute', left: scaleSzie(15), top: scaleSzie(15) }} >
                                    <Image
                                        source={USER_GRADUATION}
                                        style={{ width: scaleSzie(20), height: scaleSzie(20) }}
                                    />
                                </View>
                            </View>
                            <ButtonGroupChat
                                title='ALUMINI'
                                onPress={this.gotoOtherAlumini}
                            />
                            <View style={{ marginBottom: scaleSzie(15) }} >
                                <ButtonSubmit
                                    onPress={this.getListFriends}
                                    title={'CHAT HISTORY'}
                                />
                                <View style={{ position: 'absolute', left: scaleSzie(15), top: scaleSzie(15) }} >
                                    <Image
                                        source={ICON_CHAT}
                                        style={{ width: scaleSzie(20), height: scaleSzie(20) }}
                                    />
                                </View>
                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ color: 'red', fontSize: scaleSzie(14), fontWeight: 'bold' }} >
                                    {this.props.messageSearchUserChat}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Loading visible={this.props.isLoadingSearchUser} />
            </BackgroundView>
        );
    }
}

const ButtonGroupChat = props => {
    return (
        <View style={{ marginBottom: scaleSzie(15) }} >
            <ButtonSubmit
                onPress={() => props.onPress()}
                title={props.title}
            />
            <View style={{ position: 'absolute', left: scaleSzie(15), top: scaleSzie(15) }} >
                <FontAwesome name="group" size={20} color='#fff' />
            </View>
        </View>
    );
}