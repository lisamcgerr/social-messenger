import React, { useEffect, useState } from 'react';
import '../style/Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import AddNewChat from './AddNewChat';
import { useStateValue } from '../contexts/StateProvider';
import Logout from './Logout';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [rooms, setRooms] = useState([]);
    const roomsCollection = collection(db, 'rooms');
    const [{ user }] = useStateValue();

    useEffect(() => {
        const fetchRooms = async () => {
            const data = await getDocs(roomsCollection);
            setRooms(data.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        }
        fetchRooms();
    })

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} alt="Google profile icon"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <Logout />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <Link to='/'><HomeIcon /></Link>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <AddNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
};

export default Sidebar;