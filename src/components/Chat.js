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
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    // every time the room changes we are going to get new messages for that room
    useEffect(() => {
        const fetchRoom = async (roomId) => {
            if (roomId) {
                const docRef = doc(db, 'rooms', roomId);
                const docSnap = await getDoc(docRef);
                console.log('docSnap Name: ', docSnap.data().name);
                setRoomName(docSnap.data().name);

                const docRefRoomMessages = collection(db, 'rooms', roomId, 'messages');
                const docSnapRoomMessages = await getDocs(docRefRoomMessages);
                console.log(docSnapRoomMessages.docs.map(doc => ({id: doc.id, ...doc.data()})))
                // setRoomMessages()
            };
        };
        fetchRoom(roomId);
    }, [roomId])

    useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        setSeed(random);
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('Input Variable: ', input);
        setInput('');
        // @TODO
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
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
            <div className="chat__body">
                {/* @TODO chat receiver logic*/}
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">@TODO Chatter Name</span>
                    @TODO Chat Message here
                    <span className="chat__timestamp">@TODO time</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">@TODO Chatter Name</span>
                    @TODO Chat Message here
                    <span className="chat__timestamp">@TODO time</span>
                </p>
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