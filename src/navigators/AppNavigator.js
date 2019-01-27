import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createNavigationContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';

import {
    HomePageScreen,
} from '../screens';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default createNavigationContainer(createSwitchNavigator({
    Auth: AuthStack,
    Main: MainStack
},
    {
        initialRouteName: 'Main'
    }

))
