export function registerUser(body) {
    return {
        type: 'REGISTER_USER',
        payload: body
    }
}