const init = 0;
export default function countReducer (preState = init, action){
    switch(action.type){
        case 'increment':
            return preState + action.data*1
        case 'decrement':
            return preState - action.data
        default:
            return preState
    }
}