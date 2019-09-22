const initialState = {
    test: false,
    routeName: 'HomePage',
    loadingRegister: false,
    isRegisterApp: false,
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
    isForgotPasswordSuccess: false,
    // ==== Contact Us ====,
    isLoadingContactUs: false,
    statusContactUs: '',
    sendContactUsSuccess : false,

    // ===== SEARCH_USER ====
    isLoadingSearchUser: false,
    listSearch: [],
    io: {},
    messageSearchUserChat: '',
    // ===== REQUEST REUNION ====,
    isLoadingRequestReunion: false,
    messageRequestReunion: '',
    requestSucces: false,

    loading: false

}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOADING_ROOT':
            return {
                ...state,
                loading: true
            }
        case 'STOP_LOADING_ROOT':
            return {
                ...state,
                loading: false
            }
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
                loadingRegister: false,
                isRegisterApp: true
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

        case 'RESET_STATE_REGISTER':
            return {
                ...state,
                isRegisterApp: action.payload,
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
        case 'CONTACT_US':
            return {
                ...state,
                isLoadingContactUs: true,
                statusContactUs: '',
                sendContactUsSuccess: false
            }
        case 'CONTACT_US_SUCCESS':
            return {
                ...state,
                isLoadingContactUs: false,
                sendContactUsSuccess: true,
                statusContactUs: 'Thank you for reaching to us. We will get in touch with you within 1-3 working days.'
            }
        case 'CONTACT_US_FAIL':
            return {
                ...state,
                isLoadingContactUs: false,
                statusContactUs: action.payload.message
            }
        case 'RESET_STATE_CONTACT_US':
            return {
                ...state,
                isLoadingContactUs: false,
                statusContactUs: '',
                sendContactUsSuccess: false
            }

        case 'RESET_ROUTER':
            return {
                ...state,
                routeName: action.payload
            }
        // ===== SEARCH_USER ====
        case 'SEARCH_USER':
            return {
                ...state,
                isLoadingSearchUser: true,
                messageSearchUserChat: ""
            }
        case 'SEARCH_USER_SUCCESS':
            return {
                ...state,
                isLoadingSearchUser: false,
                listSearch: action.payload.listUsers,
                messageSearchUserChat: outputErrorSearchListUser(action.payload.listUsers, action.graduationYear)
            }
        case 'SEARCH_USER_FAIL':
            return {
                ...state,
                isLoadingSearchUser: false,
                listSearch: []
            }
        case 'SET_UP_SOCKET':
            return {
                ...state,
                io: action.payload
            }
        case 'RESET_STATE_SEARCH':
            return {
                ...state,
                messageSearchUserChat: ''
            }
        case 'SET_STATE_MESSAGE_SEARCH':
            return {
                ...state,
                messageSearchUserChat: 'Please enter name of person you want to search !'
            }

        case 'GET_LIST_FRIENDS':
            return {
                ...state,
                isLoadingSearchUser: true
            }
        case 'GET_LIST_FRIENDS':
            return {
                ...state,
                isLoadingSearchUser: true,
                messageSearchUserChat: ''
            }
        case 'GET_LIST_FRIENDS_SUCCESS':
            return {
                ...state,
                isLoadingSearchUser: false,
                listSearch: action.payload.listFriend,
                messageSearchUserChat: action.payload.listFriend.length === 0 ? 'Chat history is empty !' : ''
            }
        case 'UPDATE_LIST_FRIENDS_SUCCESS':
            return {
                ...state,
                listSearch: action.payload.listFriend,
            }

        case 'GET_LIST_FRIENDS_FAIL':
            return {
                ...state,
                isLoadingSearchUser: false,
                messageSearchUserChat: action.payload.message
            }
        case 'RESET_LIST_CHAT':
            return {
                ...state,
                listSearch: [],
                messageSearchUserChat: ''
            }
        // ====== Request Reunion =====
        case 'REQUEST_REUNION':
            return {
                ...state,
                isLoadingRequestReunion: true,
                messageRequestReunion: '',
                requestSucces: false
            }
        case 'REQUEST_REUNION_SUCCESS':
            return {
                ...state,
                isLoadingRequestReunion: false,
                messageRequestReunion: '',
                requestSucces: true
            }
        case 'REQUEST_REUNION_FAIL':
            return {
                ...state,
                isLoadingRequestReunion: false,
                messageRequestReunion: action.payload.message,
                requestSucces: false
            }
        default:
            return state
    }
}

function outputErrorSearchListUser(list, graduationYear) {
    if (list.length === 0) {
        if (graduationYear) {
            return 'Class not found !'
        } else {
            return "Name not found !"
        }
    }
    return ""
}

module.exports = appReducer;