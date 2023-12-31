import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Home/Message"
import News from "../pages/Home/News"
import Detail from "../../src/pages/Home/Message/Detail"
import { Navigate } from "react-router-dom"
const routes = [
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/home",
          element:<Home/>,
          children:[
            {
                path:"news",
                element:<News/>
            },
            {
                path:"message",
                element:<Message/>,
                children:[
                    {
                        path:"detail",
                        element: <Detail/>
                    }
                ]
            }
          ]
        },
        {
          path:"/",
          element:<Navigate to='/about'/>
        }
]
export default routes