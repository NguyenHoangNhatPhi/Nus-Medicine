import { GiftedChat } from '../../components/react-native-gifted-chat';

const initialState = {
  isAtChatScreen: false,
  currentUserChat: {},
  messages: [],
  page: 0,
  totalPage: 0,
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
        page: 0,
        totalPage: 0,
        loadingGetHistory: true
      }
    case 'GET_HISTORY_CHAT_SUCCESS':
      return {
        ...state,
        messages: GiftedChat.append([], action.payload.historyChat),
        page: action.payload.page,
        totalPage: action.payload.pages,
        loadingGetHistory: false
      }
    case 'GET_HISTORY_CHAT_FAIL':
      return {
        ...state,
        messages: GiftedChat.append([], []),
        page: 0,
        totalPage: 0,
        loadingGetHistory: false
      }
    case 'LOAD_MORE_MESSAGE':
      return {
        ...state,
        messages: GiftedChat.prepend(state.messages, [])
      }
    default:
      return state
  }
}

module.exports = dataLocal;