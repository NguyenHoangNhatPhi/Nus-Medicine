import apiConfigs from '../../configs/api';

export function addMessage(message, dispatch) {
    return {
        type: 'ADD_MESSAGE',
        payload: message,
        dispatch
    }
}

export function setFlagChatScreen(isAtChatScreen) {
    return {
        type: 'SET_FLAG_CHAT_SCREEN',
        payload: isAtChatScreen
    }
}

export function getHistoryChat(email, dispatch, page = 1) {
    return {
        type: 'GET_HISTORY_CHAT',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/history-chat?page=${page}&email=${email}`,
        token: true,
        dispatch
    }
}

export function updateCurrentUserChat(currentUserChat) {
    return {
        type: 'UPDATE_CURRENT_USER_CHAT',
        payload: currentUserChat
    }
}

export function loadmoreChat(email, page = 1, dispatch) {
    return {
        type: 'LOAD_MORE_MESSAGE',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/history-chat?page=${page}&email=${email}`,
        token: true,
        dispatch
    }
}

export function clearSocketIdCurrenChat() {
    return {
        type: 'CLEAR_SOCKET_ID_CURRENT_CHAT',
        payload: {}
    }
}

export function getListFriends(dispatch, page = 1) {
    return {
        type: 'GET_LIST_FRIENDS',
        method: 'GET',
        api: `${apiConfigs.BASE_API}user/list-friend?page=${page}`,
        token: true,
        dispatch
    }
}

export function addFriend(body, dispatch) {
    return {
        type: 'ADD_FRIEND',
        method: 'POST',
        api: `${apiConfigs.BASE_API}user/add-friend`,
        body,
        token: true,
        dispatch
    }
}

export function resetMessage() {
    return {
        type: 'RESET_MESSAGE',
        payload: {}
    }
}

export function updateAt(body, dispatch) {
    return {
        type: 'UPDATE_AT',
        method: 'POST',
        api: `${apiConfigs.BASE_API}user/update-updatedAt`,
        token: true,
        body,
        dispatch
    }
}

export function handleNumberMessageNotSeen(body) {
    return {
        type: 'HANDLE_MESSAGE_NOT_SEEN',
        method: 'POST',
        api: `${apiConfigs.BASE_API}user/handle-number-of-message`,
        token: true,
        body,
        
    }
}

export function setupPushNotiServer(body) {
    return {
        type: 'SET_UP_PUSH_NOTIFICATION',
        method: 'POST',
        api: `${apiConfigs.BASE_API}user/create-device-after-signin`,
        token: true,
        body,
        
    }
}


