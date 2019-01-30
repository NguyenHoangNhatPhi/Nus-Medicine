import {
    StyleSheet,
    Dimensions
} from 'react-native';

import Configs from '../../configs';
import { scaleSzie } from '../../utils/func';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Configs.COLOR_MAIN_APP
    },
    containerCard: {
        width,
        // height: scaleSzie(270),
        paddingHorizontal: scaleSzie(25),

    },
    containerForm: {
        // flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: scaleSzie(25),
        paddingBottom: scaleSzie(25),
        borderRadius: scaleSzie(10),
        paddingHorizontal: scaleSzie(20),
    },
    textFormLogin: {
        color: Configs.ORANGE,
        fontSize: scaleSzie(12),
        fontWeight: '400',
    }
})