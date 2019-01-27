const initialState = {
    profile: {}
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
        default:
            return state
    }
}

module.exports = dataLocal;