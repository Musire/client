import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/ModPage.css'


const ModPage = () => {

    return (
        <div>
            <Navbar links={['profile', 'logout']} />
            <h1>Welcome to the ModPage</h1>
        </div>
    )
}

export default ModPage