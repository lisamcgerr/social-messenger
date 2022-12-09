import React, { useEffect, useState } from 'react';
import '../style/Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import AddNewChat from './AddNewChat';

const Sidebar = () => {
    const [ rooms, setRooms ] = useState([]);
    const roomsCollection = collection(db, 'rooms');

    useEffect(() => {
        const fetchRooms = async () => {
            const data = await getDocs(roomsCollection);
            setRooms(data.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        }
        fetchRooms();
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    {/* @TODO seperate component for icons */}
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
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
                {/* @TODO seperate component */}
            </div>
        </div>
    )
}

export default Sidebar;