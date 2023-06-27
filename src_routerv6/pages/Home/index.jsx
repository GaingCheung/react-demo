import React from 'react'
// import { Navigate } from 'react-router-dom'
import { NavLink, Outlet } from 'react-router-dom'
export default function Home () {
  // const [sum, setSum] = React.useState(0)
  // function changeSum (){
  //   setSum(2)
  // }
    return (
            <div>
              <h2>Home组件内容</h2>
              {/* {sum === 2? <Navigate to='/about'/>:''}
              <h2>sum的值为:{sum}</h2>
              <button onClick={changeSum}>click to change sum</button> */}
              <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="message">Message</NavLink>
                  </li>
              </ul>
              <Outlet />
            </div>
    )
}
