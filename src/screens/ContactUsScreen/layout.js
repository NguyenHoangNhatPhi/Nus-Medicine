import React from 'react';
import {
    View,
    TextInput, Platform
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationEvents } from 'react-navigation';

import { HeaderScreen, Text, ButtonSubmit, BackgroundView, Button, TextInputCustom, Loading } from '../../components';
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
        const { navigation } = this.props;
        const isBack = navigation.getParam('isBack', false);
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <NavigationEvents
                        onDidBlur={payload =>{
                            this.setState({
                                content:''
                            });
                            this.props.actions.app.resetStateContactUs();
                        }}
                    />
                    <HeaderScreen
                        navigation={this.props.navigation}
                        menu={!isBack}
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
                                <View style={{ height: scaleSzie(20) }} />
                                <TextInputCustom
                                    ref={this.emailInputRef}
                                    placeholder="Email"
                                    onSubmitEditing={this.focusTextInputContent}
                                />
                                <View style={styles.containerTextinput} >
                                    <TextInput
                                        ref={this.contentInputRef}
                                        style={{
                                            flex: 1,
                                            ...Platform.select({
                                                android: {
                                                    textAlignVertical: "top"
                                                }
                                            })
                                        }}
                                        value={this.state.content}
                                        onChangeText={content => this.setState({ content })}
                                        multiline={true}
                                        underlineColorAndroid='transparent'
                                        onSubmitEditing={this.sendMessage}
                                        placeholder="Content"
                                    />
                                </View>
                                <View style={{ height: scaleSzie(40), justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: 'red', fontSize: scaleSzie(14), fontWeight: 'bold' }} >
                                        {this.props.statusContactUs}
                                    </Text>
                                </View>
                                <View style={{ width: scaleSzie(100), marginBottom: scaleSzie(10) }} >
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
                <Loading visible={this.props.isLoadingContactUs} />
            </BackgroundView>
        );
    }
}