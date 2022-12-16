import './UserList.css';
import { useState, useEffect } from 'react';
import UserDataService from '../../services/UserService';
import fotaca from '../../assets/images/fotaca.jpeg';

const UserList = () => {

    const username = localStorage.getItem('username')
    const age = localStorage.getItem('age')

    return (
        <div className='forms'>
            <h1>Your user</h1>
            <form className='formlogin' method="POST">
                <div>
                    <img src={fotaca} alt="fotaca" id='fotacaEdit'/>
                </div>
                <div>
                    <label>Username</label>
                    <input name="username" type="text" placeholder={username} autoFocus />
                </div>
                <div>
                    <label>Age</label>
                    <input name="Age" type="number" min="18" max="120" placeholder={age} />
                </div>
                <div id='buttons'>
                    <input type="submit" value="Change" />
                </div>
            </form>
        </div>
    );
}

export default UserList;