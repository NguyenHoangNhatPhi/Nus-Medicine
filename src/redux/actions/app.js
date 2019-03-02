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

export function resetStateLogin() {
    return {
        type: 'RESET_STATE_LOGIN',
        payload: false
    }
}

export function resetStateRegister() {
    return {
        type: 'RESET_STATE_REGISTER',
        payload: false
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
        token: true,
    }
}

export function updateProfile(body) {
    return {
        type: 'UPDATE_PROFILE',
        method: 'POST',
        api: `${apiConfigs.BASE_API}user/update-user-info`,
        body,
        token: true,
    }
}

export function logOut() {
    return {
        type: 'LOG_OUT_APP',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/logout`,
        token: true,
    }
}
export function forgotPassword(body) {
    return {
        type: 'FORGOT_PASSWORD',
        method: 'POST',
        api: `${apiConfigs.BASE_API}request-password-link`,
        body
    }
}

export function resetStateForgotPassword() {
    return {
        type: 'RESET_STATE_FORGOT_PASSWORD',
        payload: {}
    }
}

export function searchUser(fullname, page = 1) {
    return {
        type: 'SEARCH_USER',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/search-users?page=${page}&fullname=${fullname}`,
        token: true,
    }
}

export function contactUs(body) {
    return {
        type: 'CONTACT_US',
        method: 'POST',
        api: `${apiConfigs.BASE_API}contact-us`,
        body
    }
}

export function resetRouter() {
    return {
        type: 'RESET_ROUTER',
        payload: 'HomePage'
    }
}

export function setUpSocket(socket) {
    return {
        type: 'SET_UP_SOCKET',
        payload: socket
    }
}

export function searchGraduationYear(year) {
    return {
        type: 'SEARCH_USER',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/search-users?graduationYear=${year}`,
        token: true,
    }
}

export function resetStateSearch() {
    return {
        type: 'RESET_STATE_SEARCH',
        payload: {}
    }
}

export function resetListchat() {
    return {
        type: 'RESET_LIST_CHAT',
        payload: {}
    }
}



