import React, { useContext } from 'react'
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoragefrontIcon from '@material-ui/icons/Storage';
import VideoLibrayIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import avatar from '../../images/ramboda.JPG';
import { StateContext } from '../../context';

function Sibebar() {

    const [{ user }, dispatch] = useContext(StateContext);

    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
            <SidebarRow
                Icon={PeopleIcon}
                title="Friends"
            />
            <SidebarRow
                Icon={ChatIcon}
                title="Messenger"
            />
            <SidebarRow
                Icon={StoragefrontIcon}
                title="MarketPlace"
            />
            <SidebarRow
                Icon={VideoLibrayIcon}
                title="Videos"
            />
            <SidebarRow
                Icon={ExpandMoreOutlined}
                title="Videos"
            />
        </div>
    )
}

export default Sibebar
