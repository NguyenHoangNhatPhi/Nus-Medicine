import {
    AsyncStorage,
  } from 'react-native';

import Layout from './layout';

class LoadingScreen extends Layout {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.bootstrapAsync();
    }

    bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        let initialRouteName = userToken ? 'App' : 'Auth';
        this.props.navigation.navigate(initialRouteName);
    };

}


export default LoadingScreen;