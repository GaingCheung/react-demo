import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header () {
    const navigate = useNavigate()
    function goforward (){
        navigate(1)
    }
    function gobackward(){
        navigate(-1)
    }
    return (
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={goforward}>goforward</button>
                    <button onClick={gobackward}>gobackward</button>
                </div>
            </div>
        </div>
    )
}