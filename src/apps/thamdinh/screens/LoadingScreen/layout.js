import React from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import styles from './styles';

export default class Layout extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
}