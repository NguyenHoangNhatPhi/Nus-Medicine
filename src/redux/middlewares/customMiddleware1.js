const customMiddleware1 = store => next => action => {
    console.log('customMiddleware1')
    next(action);
}

export default customMiddleware1;