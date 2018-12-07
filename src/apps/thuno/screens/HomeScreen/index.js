import {
    AsyncStorage
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import Layout from './layout';
import { isPlatformIOS } from '../../../../core/utils/func';
import connectRedux from '../../redux/connectRedux';

class HomeScreen extends Layout {
    constructor(props) {
        super(props);
        console.log(this.props.test);
        this.props.actions.app.test()
    }

    componentDidMount() {
        // SplashScreen.hide();
        this.navListener = this.props.navigation.addListener('didFocus', () => {
        });
        this.phi = this.props.navigation.addListener('didBlur', () => {
        })
    }

    showMoreApp = () => {
        this.props.navigation.navigate('Profile');
    };

    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    componentWillUnmount() {
        this.navListener.remove();
        this.phi.remove();
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.app.test,
    }
}



export default connectRedux(mapStateToProps, HomeScreen);