import React from 'react'
import './Feed.css'
import Post from './Post'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
               profilePic='https://abduh9350.github.io/Portfolio/images/20200803_230735.jpg'
               message='Wow! its working'
               timestamp='Its 8:30pm now'
               username='Abdu Jemal'
               image='https://abduh9350.github.io/Portfolio/images/20200803_230735.jpg' />
            <Post
                profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg'
                message='Abdu I like your facebook clone'
                timestamp='Its 8:30pm now'
                username='Elon Musk'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg'  />
            <Post 
                profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg'
                message='The person who did this webpage is Pro'
                timestamp='Its 8:30pm now'
                username='Bill Gates'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg' />

            
        </div>
    )
}

export default Feed
