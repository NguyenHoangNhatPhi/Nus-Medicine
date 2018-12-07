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
                <Button onPress={this.showMoreApp} style={{
                    backgroundColor: 'red', padding: 20, borderRadius: 20,
                }} >
                    <Text>
                        Tham Dinh App
                    </Text>
                </Button>
            </View>
        );
    }
}