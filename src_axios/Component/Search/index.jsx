import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    reqUser = async () => {
        PubSub.publish('MY TOPIC', {isFirst: false, isLoading: true});
        try{
            let result = await axios.get(`http://localhost:3000/api1/search/users?q=${this.searchUsers.value}`)
            PubSub.publish('MY TOPIC', {searchResult: result.data.items, isLoading: false});
        }catch(e){
            PubSub.publish('MY TOPIC', {err: e.message, isLoading: false});
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading" >Search Github Users</h3>
                <div>
                <input type="text" ref={(c) => {this.searchUsers = c}} placeholder="enter the name you search"/>&nbsp;<button onClick={this.reqUser}>Search</button>
                </div>
            </section>
        )
    }
}
