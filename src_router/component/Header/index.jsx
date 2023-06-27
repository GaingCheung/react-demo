import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    goForward = () => {
        this.props.history.goForward();
    }
    goBack = () => {
        this.props.history.goBack();
    }
    go = () => {
        this.props.history.go(-2);
    }
  render() {
    console.log(this.props)
    return (
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={this.goForward}>前进</button>
                    <button onClick={this.goBack}>后退</button>
                    <button onClick={this.go}>Go</button>
                </div>
            </div>
        </div>
    )
  }
}
export default withRouter(Header)