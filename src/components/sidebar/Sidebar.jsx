import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">CWMA</span>
        </Link> 
        </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span></li>
        </ul>
        <ul>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineIcon className="icon"/>
              <span>Users</span></li> </Link>
        </ul>
        <ul>
        <Link to="/products" style={{textDecoration: "none"}}>
            <li>
              <ShoppingBagOutlinedIcon className="icon"/>
              <span>Products</span></li> </Link>
        </ul>
        <ul>
            <li>
            <ShoppingCartOutlinedIcon className="icon"/>
            <span>Orders</span></li>
        </ul>
        <ul>
            <li>
              <LocalShippingOutlinedIcon className="icon"/>
              <span>Delivery</span></li>
        </ul>
        <ul>
          <p className="title">USEFUL</p>
            <li>
              <AssessmentOutlinedIcon className="icon"/>
              <span>Stats</span></li>
        </ul>
        <ul>
            <li>
              <NotificationsNoneIcon className="icon"/>
              <span>Notifications</span></li>
        </ul>
        <ul>
          <p className="title">SERVICE</p>
            <li>
              <MonitorHeartIcon className="icon"/>
              <span>System Health</span></li>
        </ul>
        <ul>
            <li>
              <PsychologyOutlinedIcon className="icon"/>
              <span>Logs</span></li>
        </ul>
        <ul>
            <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span></li>
        </ul>
        <ul>
          <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
              <span>Profile</span></li>
        </ul>
        <ul>
            <li>
              <LogoutOutlinedIcon className="icon"/>
              <span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        
      </div>
    </div>
  )
}

export default Sidebar