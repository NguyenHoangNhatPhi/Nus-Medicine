import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createNavigationContainer,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Feather';

import {
    LoginScreen,
    ForgotPasswordScreen
} from '../screens';

// import HomeStack from './HomeStack';





export default createNavigationContainer(createSwitchNavigator({
    Login : LoginScreen,
    ForgotPassword:ForgotPasswordScreen
},
    {
        initialRouteName: 'ForgotPassword'
    }

))
