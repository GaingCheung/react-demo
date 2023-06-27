import React from 'react'
// params参数
// import { useParams } from 'react-router-dom'
// search参数
// import { useSearchParams } from 'react-router-dom'
// state参数
import { useLocation } from 'react-router-dom'

export default function Detail() {
    // params参数
    // const params = useParams();
    // search参数
    // const [search] = useSearchParams();
    const state = useLocation();
    console.log(state)
  return (
    <div>
        <ul>
            <li>{state.state.id}</li>
            <li>{state.state.title}</li>
            <li>{state.state.text}</li>
        </ul>
    </div>
  )
}
