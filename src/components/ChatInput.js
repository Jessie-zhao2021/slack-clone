import React, {useState} from 'react';
import db from '../firebase';
import './ChatInput.css';
import { useStateValue } from './StateProvider';
import { collection, addDoc,doc, serverTimestamp  } from 'firebase/firestore';


function ChatInput({channelName, channelId}) {
  const [input, setInput] = useState('');
  const [{user}] = useStateValue();

  const sendMessage = e => {
    e.preventDefault();

    if(channelId){
        // 1. get channel doc from rooms collection
        // const channel = ?
        const channel = doc(db, 'rooms', channelId); 
        
        // 2. get messages collection from channel doc
        const messages = collection(channel, 'messages');

        // 3. add message into messages collection
        
      addDoc(messages, {
        message: input,
        timestamp: serverTimestamp(),
        username: user.displayName,
        useimage: user.photoURL,
        // user: user.displayName,
        // userImage: user.photoURL,
    })


        // db.collection('rooms').doc(channelId).collection({
        //     message: input,
        //     timestamp: firebase.firestore.FieldValue.sever,
        //     user: user.displayName,
        //     userImage: user.photoURL,
        // })
    }
  }

  return (
    <div className='chatInput'>
        <form>
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`Message #${channelName.toLowerCase()}`}/>
            <button type='submit' onClick={sendMessage}>SEND</button>
        </form>
    </div>
  )
}

export default ChatInput