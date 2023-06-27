import React from 'react'
import './App.css'
import Search from './Component/Search'
import List from './Component/List'

class App extends React.Component{
  

  // getSearchResult = (searchResult) => {
  //   this.setState({searchResult: searchResult})
  // }
  // // 改变state中的控制是否第一次展示
  // changeIsFirst = () => {
  //   this.setState({isFirst: false})
  // }
  // chachangeLoading = (flag)=>{
  //   this.setState({isLoading: flag})
  // }
  // getError = (err) => {
  //   this.setState({err: err})
  // }
  render(){
    return (
      <div className="container">
        <Search />
        <List/>
      </div>
    )
  }
}

export default App
