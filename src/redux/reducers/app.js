const initialState = {
    test: false,
    routeName: 'HomePage',
    loadingRegister: false,
    messageRegisterError: '',
    messageLoginError: '',
    loadingLogin: false,
    isSettingContactable: false,
    isSettingNoti: true

}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                loadingRegister: true,
                messageRegisterError: ''
            }
        case 'USER_LOGIN':
            return {
                ...state,
                loadingLogin: true,
                messageLoginError: ''
            }
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                loadingLogin: false
            }
        case 'USER_LOGIN_FAIL':
            return {
                ...state,
                loadingLogin: false,
                messageLoginError: 'Wrong email or password'
            }
        case 'REGISTER_USER_SUCCESS':
            return {
                ...state,
                loadingRegister: false
            }
        case 'REGISTER_USER_FAIL':
            return {
                ...state,
                loadingRegister: false,
                messageRegisterError: action.payload.message
            }
        case 'CHANGE_SETTING_CONTACT':
            return {
                ...state,
                isSettingContactable: action.payload
            }
        case 'CHANGE_SETTING_NOTI':
            return {
                ...state,
                isSettingNoti: action.payload
            }
        case 'CHANGE_ROUTER_DRAWER':
            return {
                ...state,
                routeName: action.payload
            }

        default:
            return state
    }
}

module.exports = appReducer;