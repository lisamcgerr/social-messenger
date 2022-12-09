import React, { useEffect, useState } from 'react';
import '../style/SidebarChat.css';
import { Avatar } from '@material-ui/core';

const SidebarChat = ({ name, id, addNewChat }) => {
    const [seed, setSeed] = useState('');
    //const [newRoomName, setNewRoomName] = useState('');
    const random = Math.floor(Math.random() * 1000);

    useEffect(() => {
        setSeed(random);
    }, []);

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>@TODO Last Message...</p>
            </div>
        </div>
    );
}

export default SidebarChat;