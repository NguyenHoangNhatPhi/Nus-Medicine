import { GiftedChat } from '../../components/react-native-gifted-chat';

const initialState = {
  isAtChatScreen: false,
  currentUserChat: {},
  messages: [],
  loadingGetHistory: false
}

function dataLocal(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: GiftedChat.append(state.messages, action.payload)

      }
    case 'SET_FLAG_CHAT_SCREEN':
      return {
        ...state,
        isAtChatScreen: action.payload
      }
    case 'UPDATE_CURRENT_USER_CHAT':
      return {
        ...state,
        currentUserChat: action.payload
      }
    case 'GET_HISTORY_CHAT':
      return {
        ...state,
        messages: GiftedChat.append([], []),
        loadingGetHistory: true
      }
    case 'GET_HISTORY_CHAT_SUCCESS':
      return {
        ...state,
        messages: GiftedChat.append([], action.payload),
        loadingGetHistory: false
      }
    case 'GET_HISTORY_CHAT_FAIL':
      return {
        ...state,
        messages: GiftedChat.append([], []),
        loadingGetHistory: false
      }
    case 'LOAD_MORE_MESSAGE':
      return {
        ...state,
        messages: GiftedChat.prepend(state.messages, [
          {
            _id: 1,
            text: '------- Phi ------',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
          {
            _id: 1,
            text: '------- Phi ------',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }
    default:
      return state
  }
}

module.exports = dataLocal;