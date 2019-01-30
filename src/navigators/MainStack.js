import React from 'react';
import {
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';


import {
    ContactUsScreen,
    ClassReunionScreen,
    OtherLamuniScreen,
    HomePageScreen,
    ChatScreen,
    ProfileScreen,
    SettingScreen,
    ChangePasswordScreen,
    EventsScreen
} from '../screens';

import Configs from '../configs';
import SideMenu from '../screens/SideMenu';

const SettingStack = createStackNavigator({
    ChangePassword: ChangePasswordScreen,
    Profile: ProfileScreen,
    Setting: SettingScreen,
}, {
        initialRouteName: "Setting",
        headerMode: 'none',
    })

const MainStack = createDrawerNavigator({
    ContactUs: ContactUsScreen,
    ClassReunion: ClassReunionScreen,
    OtherLamuni: OtherLamuniScreen,
    HomePage: HomePageScreen,
    Chat: ChatScreen,
    Events:EventsScreen,
    Setting: SettingStack,
}, {
        initialRouteName: "HomePage",
        contentComponent: SideMenu,
    }
);


export default MainStack;
