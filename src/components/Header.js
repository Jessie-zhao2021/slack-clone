import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}] = useStateValue();
  return (
    <div className='header'>
        <div className='header__left'>
            <Avatar 
                className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
            />
            <AccessTimeIcon className='access__time'/>         
        </div>
        <div className='header__search'>
            <SearchIcon />
            <input placeholder='Search Clever Programmer'/>
        </div>
        <div className='header__right'>
            <HelpOutlineIcon className='help__outline'/>
        </div>

    </div>
  )
}

export default Header