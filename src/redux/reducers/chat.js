const initialState = {
    messages: []
}

function dataLocal(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }
        default:
            return state
    }
}

module.exports = dataLocal;