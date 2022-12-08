import React, { useEffect, useState } from 'react';
import '../style/SidebarChat.css';
import { Avatar } from '@material-ui/core';

const SidebarChat = ({ name, id, addNewChat }) => {
    const [seed, setSeed] = useState('');
    const random = Math.floor(Math.random() * 1000);

    useEffect(() => {
        setSeed(random);
    }, []);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');
        if (roomName) {
            // @TODO
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>@TODO Last Message...</p>
            </div>
        </div>
    ) :
    (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;