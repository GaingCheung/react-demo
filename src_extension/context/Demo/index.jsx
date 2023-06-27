import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
export default class Demo extends Component {
  state = {
    username: 'Tom',
    age: 18
  }
  render() {
    return (
      <div className='parent'>
        <h1>A组件的用户名为:{this.state.username},年龄为:{this.state.age}</h1>
        <MyContext.Provider value={{username: this.state.username, age: this.state.age}}>
          <B/>
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h1>I am component B</h1>
        <C/>
      </div>
    )
  }
}
class C extends Component {
  static contextType = MyContext
  render() {
    // console.log(this)
    return (
      <div className='grand'>
        <h1>从A组件传过来的用户名为:{this.context.username},年龄是:{this.context.age}</h1>
      </div>
    )
  }
}

// function C (){
//     return (
//       <div className='grand'>
//         <MyContext.Consumer>
//           {
//             (value) => {
//               // console.log(value)
//               return(<h1>从A组件传过来的用户名为:{value.username},年龄是:{value.age} </h1>)
//             }
//           }
//         </MyContext.Consumer>
//       </div>
//     )
// }