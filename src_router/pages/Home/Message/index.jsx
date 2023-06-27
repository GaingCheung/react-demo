import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    goForward = () => {
        this.props.history.goForward();
    }
    goBack = () => {
        this.props.history.goBack();
    }
    go = () => {
        this.props.history.go(-2);
    }
    state = {
        messageObj:[
            {id:'01', title: 'message1'},
            {id:'02', title: 'message2'},
            {id:'03', title: 'message3'},
        ]
    }
  render() {
    console.log(this.props)
    return (
        <div>
            <ul>
                {this.state.messageObj.map((item) => {
                    return (
                        <li key={item.id}>
                            {/* <Link to={`/home/message/${item.id}/${item.title}`}>{item.title}</Link> */}
                            {/* <Link to={`/home/message/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                            <Link to={{pathName:'/home/message', state:{id: item.id, title: item.title}}}>{item.title}</Link>
                        </li>
                        )
                })}
            </ul>
            <hr />
            <Route path="/home/message" component={Detail}/>
            <button onClick={this.goForward}>前进</button>
            <button onClick={this.goBack}>后退</button>
            <button onClick={this.go}>Go</button>
        </div>
        
    )
  }
}
