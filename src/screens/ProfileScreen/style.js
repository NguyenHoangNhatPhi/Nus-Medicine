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
        backgroundColor :'rgb(250,250,250)'
    },
})