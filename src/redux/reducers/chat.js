import { GiftedChat } from '../../components/react-native-gifted-chat';

const initialState = {
    messages: [],
    isAtChatScreen: false
}

function dataLocal(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            const temptMessage = [...state.messages]
            return {
                ...state,
                messages: GiftedChat.append(temptMessage, action.payload)

            }
        case 'SET_FLAG_CHAT_SCREEN':
            return {
                ...state,
                isAtChatScreen: action.payload

            }
        default:
            return state
    }
}

module.exports = dataLocal;