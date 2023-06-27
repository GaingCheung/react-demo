const initState = [{id: '001', name: 'Tom', age: 12}]
export default function personReducer(preState = initState, action) {
    switch(action.type){
        case 'ADDPERSON':
            return [action.data ,...preState]
        default:
            return preState
    }
}