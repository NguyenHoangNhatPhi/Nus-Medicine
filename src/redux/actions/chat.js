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