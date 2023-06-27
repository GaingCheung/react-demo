import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
    componentDidMount(){
        store.subscribe(() => {
            this.setState({})
        })
    }
    increment = () => {
        // this.setState({count: this.state.count + this.selectValue.value * 1})
        // store.dispatch({type: 'increment', data: this.selectValue.value})
        store.dispatch(createIncrementAction(this.selectValue.value))
    }
    decrement = () => {
        // store.dispatch({type: 'decrement', data: this.selectValue.value})
        store.dispatch(createDecrementAction(this.selectValue.value))
    }
    incrementIfOdd = () => {
        if(store.getState() % 2 !== 0){
            store.dispatch(createIncrementAction(this.selectValue.value))
        }
    }
    incrementAsync = () => {
        store.dispatch(createIncrementAsyncAction(this.selectValue.value, 1000))
    }
  render() {
    return (
      <div>
        <h1>求和结果为:{store.getState()}</h1>
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
