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

export function loadmoreChat(email,page =1) {
    return {
        type: 'LOAD_MORE_MESSAGE',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/history-chat?page=${page}&email=${email}`,
        token: true,
    }
}

export function clearSocketIdCurrenChat() {
    return {
        type: 'CLEAR_SOCKET_ID_CURRENT_CHAT',
        payload: {}
    }
}

export function getListFriends(page =1) {
    return {
        type: 'GET_LIST_FRIENDS',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/list-friend?page=${page}`,
        token: true,
    }
}

