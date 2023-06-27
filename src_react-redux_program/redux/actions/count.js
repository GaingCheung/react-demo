export const createIncrementAction = (data) => {
    return {type: 'increment', data: data}
}
export const createDecrementAction = (data) => {
    return {type: 'decrement', data: data}
}
export const createIncrementAsyncAction = (data, timeout) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, timeout)
    }
}