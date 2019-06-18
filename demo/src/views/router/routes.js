import Login from '../contains/Login/Login/Login.js'
import Admin from '../contains/Admin/Admin/Admin.js'
import Deploy from '../contains/deploy/index.js'
import { Switch,Route,Redirect} from "react-router-dom";
const Routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/deploy/index",
        component: Deploy
    },
    {
        path: "/admin",
        component: Admin
    }
]

export default Routes;