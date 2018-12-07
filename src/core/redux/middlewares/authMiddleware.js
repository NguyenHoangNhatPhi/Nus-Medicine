const authMiddleware = store => next => action => {
    console.log('add token into api ')
    next(action);
}

export default authMiddleware;