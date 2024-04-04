import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <Avatar 
                className="header__avatar"
                alt='Rafeh Qazi'
                src="{user?.photoURL}"
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