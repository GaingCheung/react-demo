import React from 'react'
import Count from './containers/count'
import Person from './containers/person'

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Count/>
        <hr/>
        <Person/>
      </div>
      
    )
  }
}

export default App
