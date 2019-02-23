export function updateProfile(profile) {
    return {
        type: 'UPDATE_PROFILE_SOCKET',
        payload: profile
    }
}