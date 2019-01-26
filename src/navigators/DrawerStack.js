import React from 'react';
import {
    createDrawerNavigator
} from 'react-navigation';

import {
    LoginScreen,
    ForgotPasswordScreen,
    AuthScreen,
    FAQScreen,
    RegisterScreen,
    ContactUsScreen,
    ClassReunionScreen,
    OtherLamuniScreen,
    HomePageScreen,
    ChatScreen,
    ProfileScreen,
    SettingScreen,
    ChangePasswordScreen
} from '../screens';

import Configs from '../configs';
import SideMenu from '../screens/SideMenu';

const DrawerStack = createDrawerNavigator({
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    Auth: AuthScreen,
    FAQ: FAQScreen,
    Register: RegisterScreen,
    ContactUs: ContactUsScreen,
    ClassReunion: ClassReunionScreen,
    OtherLamuni: OtherLamuniScreen,
    HomePage: HomePageScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen,
    Setting: SettingScreen,
    ChangePassword:ChangePasswordScreen
}, {
        initialRouteName: "ChangePassword",
        contentComponent: SideMenu,
    }
)

export default DrawerStack;
