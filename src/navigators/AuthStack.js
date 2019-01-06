import {
    createStackNavigator,
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import {
    LoginScreen,
    ForgotPasswordScreen,
    AuthScreen,
    FAQScreen
} from '../screens';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    Auth: AuthScreen,
    FAQ:FAQScreen
}, {
        initialRouteName: "Auth",
        transitionConfig: getSlideFromRightTransition,
        headerMode: 'none',
    }
);

export default AuthStack;