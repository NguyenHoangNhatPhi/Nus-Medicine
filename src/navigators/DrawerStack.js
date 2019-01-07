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
    HomePageScreen
} from '../screens';


const DrawerStack = createDrawerNavigator({
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    Auth: AuthScreen,
    FAQ: FAQScreen,
    Register: RegisterScreen,
    ContactUs: ContactUsScreen,
    ClassReunion: ClassReunionScreen,
    OtherLamuni: OtherLamuniScreen,
    HomePage:HomePageScreen
},{
        initialRouteName: "HomePage",
        headerMode: 'none',
    }
)

export default DrawerStack;
