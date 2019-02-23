import apiConfigs from '../../configs/api';

export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
}

export function setFlagChatScreen(isAtChatScreen) {
    return {
        type: 'SET_FLAG_CHAT_SCREEN',
        payload: isAtChatScreen
    }
}

export function getHistoryChat(email,page =1) {
    return {
        type: 'GET_HISTORY_CHAT',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/history-chat?page=${page}&email=${email}`,
        token: true,
    }
}

export function updateCurrentUserChat(currentUserChat) {
    return {
        type: 'UPDATE_CURRENT_USER_CHAT',
        payload: currentUserChat
    }
}

export function loadmore() {
    return {
        type: 'LOAD_MORE_MESSAGE',
        payload: {}
    }
}