const authMiddleware = store => next => action => {
    if (action.token) {
        const temptAction = { ...action, token: store.getState().dataLocal.profile.accesstoken };
        next(temptAction);

    } else {
        next(action);
    }

}

export default authMiddleware;