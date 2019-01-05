import {
    StyleSheet,
    Dimensions,
    Platform
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
    },
    shadowApp: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(95,94,163)',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.6
            },
            android: {
                elevation: 4,
            }
        }),
    }
})