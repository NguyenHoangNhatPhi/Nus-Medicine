const initialState = {
    profile: {},
    fcmToken: {}
}

function dataLocal(state = initialState, action) {
    switch (action.type) {
        case 'TEST_DATA_LOCAL':
            return {
                ...state,
                profile: true
            }
        case 'SAVE_PROFILE_LOCAL':
            return {
                ...state,
                profile: action.payload.user
            }
        case 'CLEAR_PROFILE_LOCAL':
            return {
                ...state,
                profile: {}
            }
        case 'LOG_OUT_APP':
            return {
                ...state,
                profile: {},
                fcmToken: {}
            }
        case 'UPDATE_PROFILE_SOCKET':
            return {
                ...state,
                profile: { ...state.profile, socketId: action.payload.socketId }
            }
        case 'SAVE_TOKEN_FCM':
            return {
                ...state,
                fcmToken: action.payload
            }


        default:
            return state
    }
}

module.exports = dataLocal;