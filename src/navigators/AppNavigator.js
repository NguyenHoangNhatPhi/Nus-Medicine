import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createNavigationContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';

import {
    HomeScreen,
    OtherScreen,
    LoginScreen
    // LoadingScreen
} from '../screens';

// import HomeStack from './HomeStack';





export default createNavigationContainer(createSwitchNavigator({
    Login : LoginScreen
},
    {
        initialRouteName: 'Login'
    }

))
