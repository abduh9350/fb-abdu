import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg'
                alt='' />
                <div className='header_input'>
                    <SearchIcon />
                    <input type='text' />
                </div>
            </div>
            <div className='header_middle'>
                <div className='header_option'>
                    <HomeIcon fontSize='large'/>  
                </div>

            </div>
        </div>
    )
}

export default Header
