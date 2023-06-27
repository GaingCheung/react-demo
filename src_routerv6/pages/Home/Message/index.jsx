import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    const navigate = useNavigate();
    const [messageList] = React.useState([
        {id:'001', title: 'message1', text: '床前明月光'},
        {id:'002', title: 'message2', text: '疑是地上霜'},
        {id:'003', title: 'message3', text: '举头望明月'},
        {id:'004', title: 'message4', text: '低头思故乡'},
    ])
    function jump(item){
        navigate('detail',{
            replace:false,
            state: {
                id: item.id,
                title: item.title,
                text: item.text
            }
        })
    }
  return (
    <div>
        <ul>
            {messageList.map((item) => {
                return(
                    <li key={item.id}>
                        <Link to='detail' state={{id: item.id, title: item.title, text:item.text}}>{item.title}</Link>
                        <button onClick={() => jump(item)}>go to about</button>
                    </li>
                )
            })}
        </ul>
        <hr />
        <Outlet/>
    </div>
  )
}
