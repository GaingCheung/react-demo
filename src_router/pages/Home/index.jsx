import React, { Component } from 'react'
import { NavLink, Route, Switch,Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="/home/news">News</NavLink>
                    {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                    {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                  </li>
                </ul>
                <div>
                  <Switch>
                    <Route path="/home/news" component={News}/>
                    <Route path="/home/message" component={Message}/>
                    <Redirect to="/home/news"/>
                  </Switch>
                </div>
              </div>
            </div>
    )
  }
}
