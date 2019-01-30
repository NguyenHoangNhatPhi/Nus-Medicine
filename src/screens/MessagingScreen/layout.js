import React from 'react';
import {
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, BackgroundView } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';

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
                            Register
                        </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <ButtonGroupChat
                                title='CLASS OFF 2009'
                                onPress={() => alert('ddd')}
                            />
                             <ButtonGroupChat
                                title='OTHER ALUMINI'
                                onPress={this.gotoOtherAlumini}
                            />
                        </View>
                    </View>

                </View>
            </BackgroundView>
        );
    }
}

const ButtonGroupChat = props => {
    return (
        <View style={{marginBottom:scaleSzie(15)}} >
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