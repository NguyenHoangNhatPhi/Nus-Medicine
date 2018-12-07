const customMiddleware = store => next => action => {
    console.log('customMiddleware')
    next(action);
}

export default customMiddleware;