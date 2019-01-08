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
    containerContent: {
        flex: 1,
        
    },
    textHomePage: {
        color: '#fff',
        fontSize: scaleSzie(13),
        marginTop: scaleSzie(5),
        fontWeight: '600',
        marginBottom: scaleSzie(45)
    },
    textInput:{
        // flex:1
        
    }
})