import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://abduh9350.github.io/Portfolio/images/20200803_230735.jpg' 
            title='Abdu Jemal' />
            <SidebarRow Icon={LocalHospitalIcon}
             title='Covid-19 Information Center' />
             <SidebarRow Icon={EmojiFlagsIcon}
             title='Pages' />
             <SidebarRow Icon={PeopleIcon}
             title='Friends' />
             <SidebarRow Icon={ChatIcon}
             title='Messenger' />
             <SidebarRow Icon={StorefrontIcon}
             title='Marketplace' />
             <SidebarRow Icon={VideoLibraryIcon}
             title='Videos' />
             <SidebarRow Icon={ExpandMoreOutlinedIcon}
             title='See More' />
        </div>
    )
}

export default Sidebar
