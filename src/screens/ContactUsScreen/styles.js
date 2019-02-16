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
        height: scaleSzie(440),
        height: scaleSzie(500),
        paddingHorizontal: scaleSzie(25)
    },
    containerForm:{
        flex:1,
        backgroundColor:'#ffffff',
        borderRadius:scaleSzie(10),
        paddingHorizontal: scaleSzie(20),
        paddingTop: scaleSzie(20)
    },
    textFormLogin:{
        color: Configs.ORANGE, 
        fontSize: scaleSzie(12), 
        fontWeight: '400',
    },
    textNormalScreen:{
        fontSize: scaleSzie(17)
    },
    containerTextinput:{
        height:scaleSzie(145),
        borderWidth: scaleSzie(1),
        borderColor: Configs.ORANGE,
        borderRadius:scaleSzie(4),
        marginTop:scaleSzie(22),
        paddingHorizontal:scaleSzie(12),
        paddingVertical: scaleSzie(8)
    }
})