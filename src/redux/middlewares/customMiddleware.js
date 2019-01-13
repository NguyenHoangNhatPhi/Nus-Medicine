const customMiddleware = store => next => action => {
    next(action);
}

export default customMiddleware;