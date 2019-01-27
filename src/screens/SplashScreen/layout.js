import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Shimmer from 'react-native-shimmer';

import { Button, HeaderScreen, AutoGrowingTextInput } from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';
import Configs from '../../configs';

const BACKGROUND = require('../../resources/background.png');

export default class Layout extends React.Component {

    render() {
        return (
            <ImageBackground source={BACKGROUND} style={styles.container}>
                <View style={{alignItems:'center',marginBottom:scaleSzie(50)}} >
                    <Shimmer>
                        <Text
                            style={{color:'#fff',fontSize:scaleSzie(35),fontWeight:'bold'}}
                        >Nus Medicine</Text>
                    </Shimmer>
                </View>
                <ActivityIndicator
                    color="#fff"
                    size="large"
                />
            </ImageBackground>
        );
    }
}
