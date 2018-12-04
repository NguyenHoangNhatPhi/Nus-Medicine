import {
    AsyncStorage
} from 'react-native';

import Layout from './layout';
import { isPlatformIOS } from '../../utils/func';
import connectRedux from '../../redux/ConnectRedux';

class HomeScreen extends Layout {
    constructor(props) {
        super(props);
        console.log(this.props.test);
        this.props.actions.app.test()
    }

    componentDidMount() {
        this.navListener = this.props.navigation.addListener('didFocus', () => {
        });
        this.phi = this.props.navigation.addListener('didBlur', () => {
        })
    }

    showMoreApp = () => {
        this.props.navigation.navigate('Auth');
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