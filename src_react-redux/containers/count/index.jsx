import CountUI from '../../component/Count'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

import {connect} from 'react-redux'

// function mapStateToProps (state){
//     return {
//         count: state
//     }
// }
// function mapDispatchToProps(){
//     return{
//         increment: createIncrementAction,
//         decrement: createDecrementAction,
//         incrementAsync: createIncrementAsyncAction
//     }
// }

export default connect(
    state => ({count: state}), 
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
})(CountUI)