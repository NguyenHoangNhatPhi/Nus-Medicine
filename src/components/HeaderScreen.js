import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';

import {scaleSzie,isIphoneX} from '../utils/func';

const {width,height} = Dimensions.get('window');

export default class HeaderScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const heightHeader = isIphoneX() ? 95 : 60;
        return (
          <View style={{width,height:scaleSzie(heightHeader),backgroundColor:'#ffffff'}} >

          </View>
        );
    }


}