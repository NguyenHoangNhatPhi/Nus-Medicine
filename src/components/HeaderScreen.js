import React from 'react';
import {
    View,
    Dimensions,
    Image,
    Keyboard
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { scaleSzie, isIphoneX } from '../utils/func';
import Button from './Button';

const { width, height } = Dimensions.get('window');
const LOGO = require('../resources/Logo.png');

export default class HeaderScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
    }

    back() {
        if (this.props.menu) {
            Keyboard.dismiss();
            this.props.navigation.openDrawer();
        } else {
            this.props.navigation.goBack();
        }

    }

    render() {
        const iconLeft = this.props.menu ? 'menu' : 'arrow-back'
        const heightHeader = isIphoneX() ? 95 : 60;
        return (
            <View style={{ width, height: scaleSzie(heightHeader), backgroundColor: '#ffffff', flexDirection: 'row' }} >
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: scaleSzie(10), paddingLeft: scaleSzie(12) }} >
                    {
                        !this.props.hideIconLeft ? <Button onPress={this.back} >
                            <MaterialIcons name={iconLeft} size={scaleSzie(30)} color="#000" />
                        </Button> : null
                    }

                </View>
                <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'center' }} >
                    <Image source={LOGO} style={{
                        width: scaleSzie(140), height: scaleSzie(28), marginBottom: scaleSzie(6)
                    }} />
                </View>
                <View style={{ flex: 1 }} >

                </View>
            </View>
        );
    }


}