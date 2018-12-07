const initialState = {
    login: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_APP_SUCCESS':
            return {
                ...state,
                login: true
            }
        default:
            return state
    }
}

module.exports = authReducer;