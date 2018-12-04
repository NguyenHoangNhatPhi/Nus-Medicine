import {
    AsyncStorage,
  } from 'react-native';

import Layout from './layout';

class SignInScreen extends Layout {
    constructor(props) {
        super(props);
    }

    signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Home');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

}


export default SignInScreen;