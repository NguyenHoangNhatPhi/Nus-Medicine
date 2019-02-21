const initialState = {
    messages: [
        {
            _id: 1,
            text: 'Hello Phi',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
        {
            _id: 2,
            text: 'Hi',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
    ]
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