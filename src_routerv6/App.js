import React from 'react'
import Header from './component/Header'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App (){
    // function changeClassName ({isActive}){
    //   // 每次都会调用，如果被点击的是该link则isActive为true，如果点的是别的link isActive为false
    //   return isActive? "list-group-item newLink":"list-group-item"
    // }
    const element = useRoutes(routes)
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              {/* <NavLink className={changeClassName} to="/about">About</NavLink> */}
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <Routes>
                  <Route path="/about" element={<About/>}></Route>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/" element={<Navigate to="/about"/>} />
                </Routes> */}
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}


