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

export default createNavigationContainer(createSwitchNavigator({
    Auth:AuthStack,
    HomePage:HomePageScreen
},
    {
        initialRouteName: 'HomePage'
    }

))
