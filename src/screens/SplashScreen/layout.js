import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ImageBackground,
    Image

} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Shimmer from 'react-native-shimmer';

import { BackgroundView } from '../../components';
import { scaleSzie } from '../../utils/func';
import styles from './style';
import Configs from '../../configs';

const LOGO = require('../../resources/Logo.png');

export default class Layout extends React.Component {

    render() {
        return (
            <BackgroundView>
                <View style={{ flex: 1, backgroundColor: Configs.COLOR_MAIN_APP, alignContent: 'center', paddingTop: scaleSzie(200) }} >

                    <View style={{ alignItems: 'center', marginBottom: scaleSzie(50) }} >
                        {/* <Shimmer>
                            <Text
                                style={{ color: '#fff', fontSize: scaleSzie(35), fontWeight: 'bold' }}
                            >Nus Medicine</Text>
                        </Shimmer> */}
                        <View style={{ height: scaleSzie(10) }} />
                        <View style={{
                            backgroundColor: '#fff', paddingHorizontal: scaleSzie(20),
                            paddingVertical: scaleSzie(20)
                        }} >
                            <Image source={LOGO}
                                style={{ width: scaleSzie(200), height: scaleSzie(40) }}
                            />
                        </View>
                    </View>
                    <ActivityIndicator
                        color="#fff"
                        size="large"
                    />
                </View>

            </BackgroundView>
        );
    }
}
