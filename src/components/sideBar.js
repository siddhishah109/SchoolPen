import React ,{useState} from 'react'
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import {  Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PushPinIcon from '@mui/icons-material/PushPin';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventIcon from '@mui/icons-material/Event';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import logo from '../assets/logo.png'
import sidebarBg from '../assets/side-bar.png'

const SideBar = () => {

  return (
    <>
    <div className='sidebar-box'>
     <div className='menu-container'>
     <h1 className='header' >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>School Pen</h1>
      <Menu className='custom-menu'>
        <MenuItem className='mi' icon={<DashboardIcon />}> Dashboard </MenuItem>
        <SubMenu className='smi' label="School management" icon={<SchoolIcon />}>
          <MenuItem  className='mi' icon={<PeopleAltIcon />}> Students </MenuItem>
          <MenuItem  className='mi' icon={<PersonIcon />}>teachers</MenuItem>
          <MenuItem  className='mi' icon={<StackedBarChartIcon />}>Classes</MenuItem>
          <MenuItem  className='mi' icon={<AutoStoriesSharpIcon />}>Syllabus</MenuItem>
          <MenuItem  className='mi' icon={<EventAvailableIcon />}>Attendance</MenuItem>
          <MenuItem  className='mi' icon={<EventIcon />}>Events</MenuItem>
          <MenuItem  className='mi' icon={<PushPinIcon />}>Notice Board</MenuItem>
        </SubMenu>
        
          <MenuItem  className='mi' icon={<TroubleshootIcon />}>
            Carrier Counseling
          </MenuItem>
          <MenuItem  className='mi' icon={<ThreeSixtyIcon />}>360 Evaluation</MenuItem>
       
        <MenuItem  className='mi' icon={<CurrencyRupeeIcon />}>Fee portal</MenuItem>
       
          <MenuItem  className='mi' icon={<MenuBookIcon />}> Courses </MenuItem>
          <MenuItem  className='mi' icon={<ConfirmationNumberIcon />}> Admission </MenuItem>
          <MenuItem  className='mi' icon={<ChatBubbleIcon />}> Chat </MenuItem>
          <MenuItem  className='mi' icon={<NotificationsRoundedIcon />}>
            Notifications
          </MenuItem> 
      </Menu>
      <div className='sizebox'></div>
   <img src={sidebarBg} alt="sidebarBg" className='sidebar-bg' />
     </div>
    </div>
    </>
  )
}

export default SideBar
