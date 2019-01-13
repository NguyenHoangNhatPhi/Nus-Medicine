import {
    Platform,
    Dimensions
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
    if ((method == "POST" || method == "DELETE" || method == "PUT") && action.body) {
        request['body'] = JSON.stringify(action.body);
    }
    let response = await fetch(action.api, request);
    return await response.json();
}

export const isIphoneX = () => {
    const { height, width } = Dimensions.get('window');
    return (Platform.OS === 'ios' && (height === 812 || width === 812)
    );
}

export const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}