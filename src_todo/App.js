import React from 'react'
import Header from './Component/Header'
import List from './Component/List'
import Footer from './Component/Footer'
import './App.css'

class App extends React.Component{
  // 初始化列表
  state = {
    todos:[
      {id: 1, todo: 'write', done: true},
      {id: 2, todo: 'listen', done: true},
      {id: 3, todo: 'speak', done: false},
      {id: 4, todo: 'read', done: true}
    ]
  }
  // 传给header添加新todo
  addName = (newObj) =>{
    let newTodos = [newObj, ...this.state.todos];
    this.setState({todos: newTodos})
  }
  // 传给item修改todo是否勾选上
  changeChecked = (id, done) =>{
    let newTodos = this.state.todos.map((item) => {
      if(item.id === id){
        return {...item, done:done}
      }else{
        return item
      }
    })
    this.setState({todos: newTodos})
  }
  // 传给item删除todo
  deleteTodo = (id) => {
    let newTodos = this.state.todos.filter((item) => {
      return item.id !== id
    })
    this.setState({todos: newTodos})
  }
  // 传给footer修改是否全选
  changeAllChecked = (done) => {
    let newTodos = this.state.todos.map((item) => {
      return {...item, done: done}
    })
    this.setState({todos: newTodos})
  }
  // 传给footer删除所有已完成todo
  deleteAllFinish = () => {
    let newTodos = this.state.todos.filter((item) => {
      return item.done === false
    })
    this.setState({todos: newTodos})
  }
  render(){
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addName={this.addName}/>
            <List todos={this.state.todos} changeChecked={this.changeChecked} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} changeAllChecked={this.changeAllChecked} deleteAllFinish={this.deleteAllFinish}/>
        </div>
      </div>
    )
  }
}

export default App
