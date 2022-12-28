import React, { useEffect, useState } from 'react';
import '../style/SidebarChat.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import db from './firebase';

const SidebarChat = ({ name, id }) => {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        setSeed(random);
    }, []);

    useEffect(() => {
        const fetchMessages = async () => {
            if (id) {
                const docRefRoomMessages = collection(db, 'rooms', roomId, 'messages');
                const timestampQuery = query(docRefRoomMessages, orderBy('timestamp', 'asc'));
                const docSnapRoomMessages = await getDocs(timestampQuery);
                console.log(docSnapRoomMessages.docs.map(doc => ({id: doc.id, ...doc.data()}))) // @TODO remove
                setMessages(docSnapRoomMessages.docs.map(doc => doc.data()));    
            }
        };
        fetchMessages();
    }, [])


    return (
        <Link to={`/rooms/${id}`} >
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                    <div className="sidebarChat__info">
                        <h2>{name}</h2>
                        <p>{messages[0]?.text}</p>
                    </div>
            </div>
        </Link>
    )
};

export default SidebarChat;