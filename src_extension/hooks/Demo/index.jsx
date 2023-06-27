import React from 'react'

// export default class Demo extends Component {
//   render() {
//     return (
//       <div>Demo</div>
//     )
//   }
// }

export default function Demo(){
    const [count, setCount] = React.useState(0)
    function addOne(){
        setCount(count + 1)
    }
    return(
        <div>
            <h2>当前求和为：{count}</h2>
            <button onClick={addOne}>add one</button>
        </div>
    )
}