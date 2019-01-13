import apiConfigs from '../../configs/api';

export function registerUser(body) {
    return {
        type: 'REGISTER_USER',
        method: 'POST',
        api: `${apiConfigs.BASE_API}register`,
        body
    }
}

export function login(body) {
    return {
        type: 'USER_LOGIN',
        method: 'POST',
        api: `${apiConfigs.BASE_API}login`,
        body
    }
}