import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div  className='storyReel'>
            <Story image='https://abduh9350.github.io/Portfolio/images/20200803_230735.jpg'
            profileSrc='https://media-exp1.licdn.com/dms/image/C4D35AQHAhrm_u_W4Nw/profile-framedphoto-shrink_200_200/0?e=1598976000&v=beta&t=65m6LT4yTeSFugJPXv2K4fP_cRCWt_yNVkTSxefWuTk'
            title='Abdu Jemal' />
            <Story image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg'
            profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg'
            title='Elon Musk' />
            <Story image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg'
            profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg'
            title='Bill Gates' />
        </div>
    )
}

export default StoryReel
