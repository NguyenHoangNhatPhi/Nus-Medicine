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

export function changeSettingContact(status) {
    return {
        type: 'CHANGE_SETTING_CONTACT',
        payload: !status
    }
}

export function changeSettingNoti(status) {
    return {
        type: 'CHANGE_SETTING_NOTI',
        payload: !status
    }
}

export function changeRouterDrawer(router) {
    return {
        type: 'CHANGE_ROUTER_DRAWER',
        payload: router
    }
}

export function changePassword(body) {
    return {
        type: 'CHANG_PASSWORD',
        method: 'POST',
        api: `${apiConfigs.BASE_API}user/change-password`,
        body,
        token: true
    }
}
