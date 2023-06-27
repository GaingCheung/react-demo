import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/actions/count'
import {connect} from 'react-redux'
import React, { Component } from 'react'

class Count extends Component {
   
    increment = () => {
        this.props.increment(this.selectValue.value)
    }
    decrement = () => {
        this.props.decrement(this.selectValue.value)
    }
    incrementIfOdd = () => {
        if(this.props.count % 2 !== 0){
            this.props.increment(this.selectValue.value)
        }
    }
    incrementAsync = () => {
        this.props.incrementAsync(this.selectValue.value, 1000)
    }
  render() {
    return (
      <div>
        <h1>求和结果为{this.props.count},下方总人数为{this.props.personNum}</h1>
        <select ref={(c) => {this.selectValue = c}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和值为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect( state => {
    return {
        count: state.countReducer,
        personNum: state.personReducer.length
    }
}, 
    {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
} )(Count)