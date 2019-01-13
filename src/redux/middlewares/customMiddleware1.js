const customMiddleware1 = store => next => action => {
    next(action);
}

export default customMiddleware1;