export const createIncrementAction = data => ({type: 'increment', data: data})
export const createDecrementAction = (data) => ({type: 'decrement', data: data})
export const createIncrementAsyncAction = (data, timeout) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, timeout)
    }
}