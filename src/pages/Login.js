import React, {useState} from 'react'
import axios from 'axios'
import '../styles/Login.css'

const Login = () => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const sendData = async (event) => {
        event.preventDefault()

        let response = await axios({
            method: 'post',
            url: 'http://localhost:5000/api/Login',
            headers: {'Content-Type': 'application/json'},
            data: {
                username,
                password
            }
        }).then((res) => {
            if (res.data.redirect === '/adminPage') {
                window.location = '/adminPage'
            }
        })

        console.log(response)

    }

    return (
        <div className='form-container'>
            <form onSubmit={sendData}>
                <h1>Login</h1>
                <input type='text' placeholder='username' maxLength='15' required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <br />
                    <input type='password' placeholder='password' minLength='6' maxLength='20' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <input type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default Login