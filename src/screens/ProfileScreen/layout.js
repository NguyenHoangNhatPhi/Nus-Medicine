import React from 'react';
import {
    View,
    Text,

} from 'react-native';

import { Button } from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';

export default class Layout extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textSetting} >
                    My Profile
                </Text>
                <View style={{ height: scaleSzie(75), justifyContent: 'center' }} >
                    <ItemInfo
                    title="Full Name"
                    value="Phi"
                    />
                </View>
                <View style={styles.containerContent} >
                    <ItemInfo 
                    title="Email"
                    value="abc@gmail.com"
                    />
                    <View style={styles.line} />
                    <ItemInfo 
                    title="Graduation Year"
                    value="1990"
                    />
                </View>
            </View>
        );
    }
}

const ItemInfo = props => {
    return <View style={{ flex: 1, justifyContent: 'center', paddingLeft: scaleSzie(16) }} >
        <Text style={styles.textTitle} >
           {props.title}
    </Text>
        <Text style={styles.textDesc} >
           {props.value}
    </Text>
    </View>
}