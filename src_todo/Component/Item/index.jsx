import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouseEnter: false }
    mouseEnter = () => {
        this.setState({mouseEnter: true})
    }
    mouseLeave = () => {
        this.setState({mouseEnter: false})
    }
    changeChecked = (event) => {
        this.props.changeChecked(this.props.id, event.target.checked)
    }
    deleteTodo = () => {
        if(window.confirm('是否确定要删除该项？')){
            this.props.deleteTodo(this.props.id)
        }else{

        }
    }
  render() {
    // console.log(this.props)
        return (
        <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{backgroundColor:this.state.mouseEnter?'#bbb':'white'}}>
            <label >
            <input type="checkbox" checked={this.props.done} onChange={this.changeChecked}/>
            <span>{this.props.todo}</span>
            </label>
            <button className="btn btn-danger" style={{display:this.state.mouseEnter?"block":"none"}} onClick={this.deleteTodo}>删除</button>
        </li>
    )
  }
}
