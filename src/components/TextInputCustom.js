import React from 'react';
import { View,TextInput } from 'react-native';

import { scaleSzie } from '../utils/func';
import Configs from '../configs';
import commonStyles from '../commonStyles';
import Text from './Text';
import Button from './Button';

export default class TextInputCustom extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {placeholder} = this.props;
        return (
            <View style={[{height: scaleSzie(55),borderRadius: scaleSzie(4),borderWidth:scaleSzie(1),
                paddingHorizontal:scaleSzie(15),borderColor:Configs.ORANGE}]} >
            <TextInput 
                style={{
                    flex:1
                }}
                placeholder={placeholder}
            />
            
            </View>
        );
    }

}