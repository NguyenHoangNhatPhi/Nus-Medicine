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
                hideIconLeft={true}
                />
                <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={styles.textTitle} >
                        {`We invite you to join the NUS Medicine Alumni community and`}
                    </Text>
                    <Text style={styles.textTitle} >
                        {`rediscover your alma mater`}
                    </Text>
                </View>
                <View style={styles.containerCard} >
                    <ButtonSubmit
                        onPress={this.register}
                        title="Register"
                    />
                    <View style={{height:scaleSzie(10)}} />
                     <ButtonSubmit
                        onPress={this.login}
                        title="Log In"
                        backgroundButton={"#ffffff"}
                        titleColor={'#000'}
                    />
                    <View style={{height:scaleSzie(10)}} />
                     <ButtonSubmit
                        onPress={this.faq}
                        title="FAQ"
                        backgroundButton={"transparent"}
                        border={{
                            borderWidth:scaleSzie(2),
                            borderColor: '#fff',
                        }}
                    />
                </View>
            </View>
        );
    }
}