import React from 'react';
import { createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    SignInScreen,
    HomeScreen,
} from '../screens';

import { hiddenTabbar } from '../utils/func';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    SignIn: SignInScreen
}, {
        transitionConfig: getSlideFromRightTransition,
        headerMode: 'none',
    }
);

hiddenTabbar(HomeStack)

export default HomeStack;