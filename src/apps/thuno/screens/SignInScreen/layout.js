import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';

import styles from './styles';

export default class Layout extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SignIn Screen thu no</Text>
                <Button title="Sign in!" onPress={this.signInAsync} />
                <Button
                    title="Go back to other examples"
                    onPress={() => this.props.navigation.goBack(null)}
                />

            </View>
        );
    }
}