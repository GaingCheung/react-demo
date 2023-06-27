import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header'
import { NavLink, Route, Redirect } from 'react-router-dom'

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}></Route>
                <Route path="/home" component={Home}></Route>
                <Redirect to="/about"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
