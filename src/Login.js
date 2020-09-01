import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
function Login() {
    const signIn = () => {

    }
    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png'
                    alt='' />
            </div>
            <Button type='submit' onClick={signIn} >
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
