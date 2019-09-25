import {
    Platform,
    Dimensions,
    Linking
} from 'react-native';

import Configs from './../configs';

const { width } = Dimensions.get('window');

export const hiddenTabbar = stack => {
    stack.navigationOptions = ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
            tabBarVisible = false;
        }
        return {
            tabBarVisible,
        };
    };
}

export const isPlatformIOS = _ => {
    return Platform.OS === 'ios';
}

export const scaleSzie = size => {
    return width * size / Configs.DEFAULT_WIDTH;
}

function fetchWithTimeout(url, options, timeout = 10000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject('timeout'), timeout)
        )
    ]);
}

export const requestAPI = async (action, headers = {}) => {

    let method = action.method || 'GET';
    let request = {
        method: method,
        headers: Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, headers)
    };
    if (action.token) {
        request.headers['Authorization'] = "Bearer " + action.token;
    }
    if (action.email) {
        request.headers['email'] = action.email;
    }
    if ((method == "POST" || method == "DELETE" || method == "PUT") && action.body) {
        request['body'] = JSON.stringify(action.body);
    }
    // let response = await fetch(action.api, request);
    // const data = await response.json()
    // return { ...data, statusCode: response.status };
    try {
        let response = await fetchWithTimeout(action.api, request, 10000);
        const data = await response.json()
        return { ...data, statusCode: response.status };
    } catch (error) {
        throw (error);
    }
}

export const isIphoneX = () => {
    // const { height, width } = Dimensions.get('window');
    // return (Platform.OS === 'ios' && (height === 812 || width === 812)
    // );
    const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
  );
}

export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const openBrowser = (urlSocial) => {
    Linking.canOpenURL(urlSocial).then(supported => {
        if (!supported) {
        } else {
            return Linking.openURL(urlSocial);
        }
    }).catch(err => console.error('An error occurred', err));
}