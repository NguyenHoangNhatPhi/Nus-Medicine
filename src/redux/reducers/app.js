const initialState = {
    test: false,
    routeName: 'HomePage',
    loadingRegister: false,
    messageRegisterError: '',
    messageLoginError: '',
    isLoginApp: false,
    loadingLogin: false,
    isSettingContactable: false,
    isSettingNoti: true,
    isLoadingChangePassword: false,
    messageChangePassword: '',
    // ---- forgot pass ----
    isLoadingForgotPassword: false,
    messageForgotPasswordError: '',
    isForgotPasswordSuccess: false

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
                loadingLogin: false,
                isLoginApp: true
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
        case 'CHANG_PASSWORD':
            return {
                ...state,
                isLoadingChangePassword: true,
                messageChangePassword: ''
            }
        case 'CHANG_PASSWORD_FAIL':
            return {
                ...state,
                isLoadingChangePassword: false,
                messageChangePassword: action.payload.message
            }
        case 'CHANG_PASSWORD_SUCCESS':
            return {
                ...state,
                isLoadingChangePassword: false,
            }
        case 'RESET_STATE_LOGIN':
            return {
                ...state,
                isLoginApp: action.payload,
            }
        case 'FORGOT_PASSWORD':
            return {
                ...state,
                isLoadingForgotPassword: true,
                messageForgotPasswordError: ''
            }
        case 'FORGOT_PASSWORD_SUCCESS':
            return {
                ...state,
                isLoadingForgotPassword: false,
                isForgotPasswordSuccess: true
            }

        case 'FORGOT_PASSWORD_FAIL':
            return {
                ...state,
                isLoadingForgotPassword: false,
                messageForgotPasswordError: action.payload.message
            }
        case 'RESET_STATE_FORGOT_PASSWORD':
            return {
                ...state,
                isForgotPasswordSuccess: false
            }
        default:
            return state
    }
}

module.exports = appReducer;