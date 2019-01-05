import {
    createStackNavigator,
} from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import {
    LoginScreen,
    ForgotPasswordScreen,
    AuthScreen
} from '../screens';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    Auth: AuthScreen
}, {
        initialRouteName: "Auth",
        transitionConfig: getSlideFromRightTransition,
        headerMode: 'none',
    }
);

export default AuthStack;