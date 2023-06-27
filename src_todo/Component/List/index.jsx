import React from 'react'
import Item from '../Item'
import './index.css'

class List extends React.Component{
    render(){
        return (
                <ul className="todo-main">
                {this.props.todos.map((item) => {
                    return <Item key={item.id} {...item} changeChecked={this.props.changeChecked} deleteTodo={this.props.deleteTodo}/>
                })}
                </ul>
        )
    }
}

export default List