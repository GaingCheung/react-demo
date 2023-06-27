import React, { Component } from 'react'
// import qs from 'qs'

const messageDetail = [
    {id:'01', title: 'message1', content: 'HELLO'},
    {id:'02', title: 'message2', content: 'GOODBYE'},
    {id:'03', title: 'message3', content: 'SEEYOUAGAIN'},
]

export default class Detail extends Component {
  render() {
    let res = {};
    // let obj = qs.parse(this.props.location.search.slice(1));
    let {id} = this.props.location.state || {}
    console.log(this.props)
    messageDetail.forEach((item) => {
        if(item.id === id){
            res = item;
        }
    })
    // console.log(obj)
    return (
      <ul>
        <li>id:{res.id}</li>
        <li>title:{res.title}</li>
        <li>content:{res.content}</li>
      </ul>
    )
  }
}
