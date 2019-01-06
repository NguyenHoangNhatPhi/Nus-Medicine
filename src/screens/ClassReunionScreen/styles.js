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
        height: scaleSzie(273),
        paddingHorizontal: scaleSzie(25)
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: scaleSzie(10),
        paddingHorizontal: scaleSzie(20),
        paddingTop: scaleSzie(20)
    },
    textContent: {
        fontSize: scaleSzie(14),
        fontWeight: '500',
    },
    containerFooter: {
        flex: 1,
    },
    footer: {
        height: scaleSzie(57),
        flexDirection: 'row',
    },
    containerPick: {
        flex: 1,
        backgroundColor: Configs.ORANGE,
        borderRadius: scaleSzie(4),
        flexDirection: 'row',
        paddingLeft: scaleSzie(10)
    },
    boxdateSelect: {
        flex: 1.5,
        borderWidth: scaleSzie(2),
        borderColor: Configs.ORANGE,
        borderRadius: scaleSzie(4),
        justifyContent: 'center',
        paddingLeft: scaleSzie(15)
    },
    containerModal: {
        width: width ,
        height:scaleSzie(300),
        backgroundColor:'#fff',
        // borderRadius:scaleSzie(4)
    }
})