import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    containerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    centerHorVer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    maxSizeScreen: {
        width, height
    }
})