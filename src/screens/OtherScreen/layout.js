import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';

export default class Layout extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Other Screen</Text>
                <Button title="I'm done, sign me out" onPress={this.signOutAsync} />
                <StatusBar
          barStyle="light-content"
          backgroundColor='yellow'
        />
            </View>
        );
    }

}