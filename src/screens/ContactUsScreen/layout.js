import React from 'react';
import {
    View,
    TextInput, Platform
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { HeaderScreen, Text, ButtonSubmit, BackgroundView, Button } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';

export default class Layout extends React.Component {

    renderItemIconText(icon, content) {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >
                <MaterialIcons name={icon} size={18} color={Configs.COLOR_MAIN_APP} />
                <Text style={[styles.textNormalScreen, { marginLeft: scaleSzie(20) }]} >
                    {content}
                </Text>
            </View>
        );
    }

    renderIconSocials() {
        return (
            <View style={{
                flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: scaleSzie(50)
            }} >
                <Button onPress={() => this.gotoSocial('https://www.facebook.com/')} >
                    <Entypo name="facebook-with-circle" size={40} color="rgb(72,107,185)" />
                </Button>
                <Button onPress={() => this.gotoSocial('https://www.instagram.com/')} >
                    <Entypo name="instagram-with-circle" size={40} color="rgb(76,125,171)" />
                </Button>
                <Button onPress={() => this.gotoSocial('https://twitter.com/')} >
                    <Entypo name="twitter-with-circle" size={40} color="rgb(90,135,216)" />
                </Button>
                <Button onPress={() => this.gotoSocial('https://www.youtube.com/')} >
                    <Entypo name="youtube-with-circle" size={40} color="rgb(219,0,0)" />
                </Button>
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
                    <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                            CONTACT US
                    </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <ScrollView
                                keyboardShouldPersistTaps="always"
                                showsVerticalScrollIndicator={false}
                            >
                                {this.renderItemIconText('phone', '(65) 6601 5518')}
                                <View style={{ height: scaleSzie(3) }} />
                                {this.renderItemIconText('email', 'alumni.med@nus.edu.sg')}
                                <View style={{ height: scaleSzie(3) }} />
                                <Text style={[styles.textNormalScreen]} >
                                    {`or leave a message below.`}
                                </Text>
                                <View style={styles.containerTextinput} >
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            ...Platform.select({
                                                android: {
                                                    textAlignVertical: "top"
                                                }
                                            })
                                        }}
                                        // value={this.state.value}
                                        // onChangeText={text => this.setState({ value: text })}
                                        multiline={true}
                                        underlineColorAndroid='transparent'
                                        onSubmitEditing={this.sendMessage}
                                    />
                                </View>
                                <View style={{ width: scaleSzie(100), marginBottom: scaleSzie(30) }} >
                                    <ButtonSubmit
                                        onPress={this.sendMessage}
                                        title="Submit"
                                    />
                                </View>
                                {this.renderIconSocials()}
                                <View style={{ height: scaleSzie(150) }} />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </BackgroundView>
        );
    }
}