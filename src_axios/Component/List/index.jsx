import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {
        searchResult:[],
        isFirst: true,
        isLoading: false,
        err: ''
      }
    
    componentDidMount(){

        this.token = PubSub.subscribe('MY TOPIC', (msg, data) => {
            this.setState(data)
        })
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.isFirst?<h1>please enter your search</h1>:(
                        this.state.isLoading?<h1>Loading</h1>:(
                            this.state.err?<h1 style={{color:'red'}}>{this.state.err}</h1>:(
                                this.state.searchResult.map((item) => {
                                    return(
                                        <div className="card" key={item.id}>
                                            <a rel="noreferrer" href={item.html_url} target="_blank">
                                                <img alt="head_portrait" src={item.avatar_url} style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{item.login}</p>
                                        </div>
                                    )
                                })
                            )
                        )
                    )
                }
            </div>
        )
    }
}
