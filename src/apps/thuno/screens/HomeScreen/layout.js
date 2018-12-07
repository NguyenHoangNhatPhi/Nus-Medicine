import React from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';

import { Button } from '../../../../core/components';
import commonStyles from '../../../../core/commonStyles';

export default class Layout extends React.Component {


    render() {
        return (
            <View style={commonStyles.containerCenter}>
                <Text>Home Screen Thu No</Text>
                <Button onPress={this.showMoreApp} style={{
                    backgroundColor: 'red', padding: 20, borderRadius: 20,
                }} >
                    <Text>
                        showMoreApp
                    </Text>
                </Button>
                {/* <Button title="Show me more of the app" onPress={this.showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this.signOutAsync} /> */}
            </View>
        );
    }
}