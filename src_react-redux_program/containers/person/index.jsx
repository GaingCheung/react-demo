import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import {createPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const newPerson = {id: nanoid(), name: this.nameNode.value, age: this.ageNode.value}
        this.props.createPerson(newPerson);
    }
  render() {
    return (
      <div>
        <h1>上方总和为{this.props.countNum}</h1>
        <input type="text" placeholder='输入名字' ref={(c) => {this.nameNode = c}}/>
        <input type="text" placeholder='输入年龄' ref={(c) => {this.ageNode = c}}/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
            {this.props.person.map((item) => {
                return (<li key={item.id}>{item.name}==={item.age}</li>)
            })}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  person: state.personReducer,
  countNum: state.countReducer
}),{
    createPerson: createPersonAction
})(Person)