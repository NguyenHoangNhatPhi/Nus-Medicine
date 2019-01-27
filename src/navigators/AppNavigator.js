import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createNavigationContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';

import {
    SplashScreen
} from '../screens';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default createNavigationContainer(createSwitchNavigator({
    Auth: AuthStack,
    Main: MainStack,
    Splash:SplashScreen
},
    {
        initialRouteName: 'Splash'
    }

))
