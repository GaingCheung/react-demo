import React, {  PureComponent } from 'react'
import './index.css'

export default class Demo extends PureComponent {
    state = {
        username: 'Tom'
    }
    changeName = () => {
        this.setState({username: 'Jerry'})
    }
  render() {
    console.log('@parent')
    return (
        <div className='parent'>
            <h1>Myusername:{this.state.username}</h1>
            <button onClick={this.changeName}>click to change name</button>
            <Child/>
        </div>
    )
  }
}
class Child extends PureComponent {
    render() {
        console.log('@child')
      return (
        <div className='child'>
            child
        </div>
      )
    }
  }
