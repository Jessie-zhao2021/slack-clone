import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useParams } from 'react-router-dom';
import { InfoOutlined, Message, StarBorderOutlined } from '@mui/icons-material';
import db from "../firebase";
import { getDoc, doc, collection, onSnapshot, query, orderBy} from "firebase/firestore"; 
import Messages from './Messages';


function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);
  useEffect(() => {
    if(roomId) {     
        const roomRef = doc(db, 'rooms', roomId); 
        getDoc(roomRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              setRoomDetails(docSnap.data()); 
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.error("Error getting document:", error);
          });

          const messagesQuery = query(collection(roomRef, "messages"), orderBy('timestamp'));
               
          onSnapshot(messagesQuery, (snapshot) => {
            console.log('snapshot:', snapshot);
            setRoomMessages(snapshot.docs.map(doc => doc.data()))
          });
        
    // db.collection('rooms').doc(roomId)
    //     .collection('messages')
    //     .orderBy('timestamp', 'asc')
    //     .onSnapshot((snapshot) =>
    //             setRoomMessages(snapshot.docs.map(doc => doc.data())
    //         )
    //     )
    }
  }, [roomId])
  console.log('roomDetails:', roomDetails);
  console.log('roomMessages:', roomMessages);

  return (
    <div className='chat'>
        {/* <h2>You are in the {roomId} room</h2> */}
        <div className='chat__header'>
            <div className='chat__headerLeft'>
                <h4 className='chat__channelName'>
                    <strong># {roomDetails?.name}</strong>
                    <StarBorderOutlined className='star__outlined'/>
                </h4>
            </div>
            <div className='chat__headerRight'>
                <p>
                    <InfoOutlined className='info__outlined'/> Details
                </p>
            </div>
        </div>
        <div className='chat__messages'>
            {roomMessages?.map(({message, timestamp, username, useimage}) => (
                <Messages 
                  message={message}
                  timestamp={timestamp}
                  user={username}
                  userImage={useimage}
                />
            ))}
        </div>
    </div>
  )
}

export default Chat