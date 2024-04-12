import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption'
import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, People, PeopleAlt } from '@mui/icons-material';
import db from "../firebase";
import { collection, doc, onSnapshot, query } from "firebase/firestore"; 


function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const roomsQuery = query(collection(db, "rooms"));

    onSnapshot(roomsQuery, (result) => {
      const rooms = [];
      // console.log('roomsQuery:', roomsQuery)
      // console.log('result:', result)
      result.forEach((doc) => (rooms.push({
        id: doc.id,
        name: doc.data().name,
      })));
      
      setChannels(rooms)
    });

    // db.collection('rooms').onSnapshot(snapshot => (
    //   setChannels(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       name: doc.data().name,
    //     }))
    //   )
    // ))
  }, [])

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecord className='dot'/>
            Jessie Zhao
          </h3>
        </div>
        <Create className='create__pen'/>
      </div>     
      <SidebarOption Icon={InsertComment} title="Threads" />
      {/* <SidebarOption title="Youtube" /> */}
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr/>
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr/>
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption='true'/>
      {/* Connect to dB and list all the channels */}
      {/* <SidebarOption ... /> */}
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar;