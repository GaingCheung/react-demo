import React from 'react'
import './index.css'

class Footer extends React.Component{
    // 修改全选框
    changeAllChecked = (event) => {
        this.props.changeAllChecked(event.target.checked);
    }
    // 删除所有完成todo
    deleteAllFinish = () => {
        this.props.deleteAllFinish();
    }
    render(){
        let finishNum = this.props.todos.reduce((pre,current) => {return pre + (current.done?1:0)}, 0)
        let allNum = this.props.todos.length
        return(
            <div className="todo-footer">
            <label>
              <input type="checkbox" checked={finishNum === allNum && allNum !== 0? true: false} onChange={this.changeAllChecked}/>
            </label>
            <span>
              <span>已完成{finishNum}</span> / 全部{allNum}
            </span>
            <button className="btn btn-danger" onClick={this.deleteAllFinish}>清除已完成任务</button>
          </div>
        )
    }
}
export default Footer