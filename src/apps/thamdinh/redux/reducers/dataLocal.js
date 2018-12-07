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
        default:
            return state
    }
}

module.exports = dataLocal;