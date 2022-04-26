import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/AdminPage.css'


const AdminPage = () => {

    return (
        <div>
            <Navbar links={['profile', 'logout']} />
            <h1>Welcome to the AdminPage</h1>
        </div>
    )
}

export default AdminPage