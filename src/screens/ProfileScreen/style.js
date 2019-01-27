import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

import Configs from '../../configs';
import { scaleSzie } from '../../utils/func';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(250,250,250)'
    },
    textLogout: {
        color:Configs.ORANGE,
        fontSize: scaleSzie(14),
        fontWeight: '600',
        marginLeft:scaleSzie(5)
    },
    textSetting: {
        color: 'rgb(0,127,122)',
        fontSize: scaleSzie(14),
        fontWeight: '600',
        marginLeft: scaleSzie(16),
        ...Platform.select({
            ios: {
                marginTop: scaleSzie(40)
            },
            android: {
                marginTop: scaleSzie(20)
            }
        })
    },
    containerContent: {
        height: scaleSzie(160),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'rgb(230,230,230)',
        borderBottomColor: 'rgb(230,230,230)',
    },
    line: {
        height: 1,
        backgroundColor: 'rgb(230,230,230)',
    },
    textTitle: {
        color: 'rgb(33,33,33)',
        fontSize: scaleSzie(14),
    },
    textDesc: {
        color: 'rgb(147,147,147)',
        fontSize: scaleSzie(13),
    }
})