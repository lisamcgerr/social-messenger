import React, { useState, useEffect } from 'react';
import '../style/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const random = Math.floor(Math.random() * 1000);
    const { roomId } = useParams();

    useEffect(() => {
        setSeed(random);
    }, []);

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
                    <h3>@TODO Room Name</h3>
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