import React from 'react'
import {nanoid} from 'nanoid'
import './index.css'

class Header extends React.Component{
    iptTask = (event) =>{
        if(event.keyCode === 13){
            //do sth
            // console.log(event.target.value)
            if(event.target.value.trim() === ''){
                alert('必须输入内容')
            }else{
                let newObj = {id: nanoid(), todo: event.target.value.trim(), done: false}
                this.props.addName(newObj);
                event.target.value = ''
            }
        }else{

        }
    }
    render(){
        return (
            <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.iptTask}/>
            </div>
        )
    }
}
export default Header