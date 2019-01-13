import {
    StyleSheet,
    Dimensions
} from 'react-native';

import Configs from '../../configs';
import { scaleSzie } from '../../utils/func';

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :Configs.COLOR_MAIN_APP
    },
    containerCard:{
        width,
        height: scaleSzie(550),
        paddingHorizontal: scaleSzie(25)
    },
    containerForm:{
        flex:1,
        backgroundColor:'#ffffff',
        borderRadius:scaleSzie(10),
        paddingHorizontal: scaleSzie(20),
        paddingTop: scaleSzie(25)
    },
    textFormLogin:{
        color: Configs.ORANGE, 
        fontSize: scaleSzie(12), 
        fontWeight: '400',
    }
})