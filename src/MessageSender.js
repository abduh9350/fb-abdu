import React from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender() {
    const handleSubmit = (e) => {
        e.preventdefault();
    }
    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <Avatar />
                <form>
                    <input className='messageSender' placeholder="what's on your mind" />
                    <input  className='messageSender' placeholder='Image URL' />
                    <button onClick={handleSubmit}
                    type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className='messageSender_bottom'>
                <div className='messageSender_option'>
                    <VideocamIcon style={{ color: 'red'}} />
                    <h3>Live Video</h3>
                    <PhotoLibraryIcon style={{ color: 'green'}} />
                    <h3>Photo/Video</h3>
                    <InsertEmoticonIcon style={{ color: 'orange'}} />
                    <h3>Feeling/Activity</h3>    
                </div>
            </div>
        </div>
    )
}

export default MessageSender
