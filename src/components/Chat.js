import React, { useState, useEffect } from 'react';
import '../style/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { doc, getDoc, collection, getDocs, addDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { useStateValue } from '../contexts/StateProvider';

const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        const fetchRoom = async (roomId) => {
            if (roomId) {
                const docRef = doc(db, 'rooms', roomId);
                const docSnap = await getDoc(docRef);
                setRoomName(docSnap.data().name);

                const docRefRoomMessages = collection(db, 'rooms', roomId, 'messages');
                const timestampQuery = query(docRefRoomMessages, orderBy('timestamp', 'asc'));
                const docSnapRoomMessages = await getDocs(timestampQuery);
                setMessages(docSnapRoomMessages.docs.map(doc => doc.data()));
            };
        };
        fetchRoom(roomId);
    }, [roomId])

    useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        setSeed(random);
    }, [roomId]);

    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'rooms', roomId, 'messages'), {
            text: input,
            name: user.email,
            timestamp: serverTimestamp()
        });
        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen{' '}{new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className="chat__headerRight">
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
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${user.email === message.name && "chat__receiver"}`} key={message.id}>
                    <span className="chat__name">{message.name}</span>
                    {message.text}
                    <span className="chat__timestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage} >Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
};

export default Chat;