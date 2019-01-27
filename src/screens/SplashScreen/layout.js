import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { Button, HeaderScreen, AutoGrowingTextInput } from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';
import Configs from '../../configs';

const BACKGROUND = require('../../resources/background.jpg');

export default class Layout extends React.Component {

    render() {
        return (
            <ImageBackground source={BACKGROUND} style={styles.container}>
                <ActivityIndicator 
                    color="#fff"
                    size="large"
                />
            </ImageBackground>
        );
    }
}
