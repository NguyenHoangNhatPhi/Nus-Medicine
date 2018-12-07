import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export default class Layout extends React.Component {
    render() {
        console.log('render Home')
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}