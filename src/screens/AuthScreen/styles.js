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
        backgroundColor: Configs.COLOR_MAIN_APP
    },
    containerCard:{
        width,
        height: scaleSzie(295),
        paddingHorizontal: scaleSzie(25)
    },
    textTitle :{
        color: '#ffffff',
         fontSize: scaleSzie(12), 
         fontWeight: '500'
    }
})