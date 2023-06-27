import React from 'react'
import Count from './containers/count'
// import store from './redux/store'

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Count/>
        {/* <Count store={store}/> */}
      </div>
      
    )
  }
}

export default App
