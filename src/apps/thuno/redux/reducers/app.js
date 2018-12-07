const initialState = {
    test: false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST_APP_SUCCESS':
            return {
                ...state,
                test: true
            }
        default:
            console.log('ddddddd')
            return state
    }
}

module.exports = appReducer;