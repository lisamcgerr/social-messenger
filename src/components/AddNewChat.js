import React from 'react';
import '../style/AddNewChat.css'
import db from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const AddNewChat = () => {
    const createChat = () => {
        const roomName = prompt('Please enter name for chat room');
        if (roomName) {
          const roomsCollection = collection(db, 'rooms');
          addDoc(roomsCollection, {name: roomName});
        }
    };

  return (
    <div onClick={createChat} className="addNewChat">
        <h2>Add New Chat Room</h2>
    </div>
  )
}

export default AddNewChat;