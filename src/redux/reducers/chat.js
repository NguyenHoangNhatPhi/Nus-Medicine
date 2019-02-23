import { GiftedChat } from '../../components/react-native-gifted-chat';

const initialState = {
  isAtChatScreen: false,
  currentUserChat: {},
  messages: [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },

  ],
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