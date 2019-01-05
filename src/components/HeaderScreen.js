import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { scaleSzie, isIphoneX } from '../utils/func';
import Button from './Button';

const { width, height } = Dimensions.get('window');

export default class HeaderScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
    }

    back(){
        this.props.navigation.goBack();
    }

    render() {
        const heightHeader = isIphoneX() ? 95 : 60;
        return (
            <View style={{ width, height: scaleSzie(heightHeader), backgroundColor: '#ffffff', flexDirection: 'row' }} >
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: scaleSzie(10), paddingLeft: scaleSzie(12) }} >
                {
                    !this.props.hideIconLeft ? <Button onPress={this.back} >
                    <MaterialIcons name="arrow-back" size={30} color="#000" />
                </Button> : null
                }
                    
                </View>
                <View style={{ flex: 1 }} >
                </View>
                <View style={{ flex: 1 }} >

                </View>
            </View>
        );
    }


}