import {
    createStackNavigator,
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import {
    LoginScreen,
    ForgotPasswordScreen,
    AuthScreen,
    FAQScreen,
    RegisterScreen,
    ContactUsScreen,
    ClassReunionScreen
} from '../screens';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    Auth: AuthScreen,
    FAQ: FAQScreen,
    Register: RegisterScreen,
    ContactUs: ContactUsScreen,
    ClassReunion: ClassReunionScreen
}, {
        initialRouteName: "ClassReunion",
        transitionConfig: getSlideFromRightTransition,
        headerMode: 'none',
    }
);

export default AuthStack;