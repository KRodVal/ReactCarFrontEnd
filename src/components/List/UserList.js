import './UserList.css';
import { useState, useEffect } from 'react';
import UserDataService from '../../services/UserService';
import fotaca from '../../assets/images/fotaca.jpeg';

const UserList = () => {

    const id = localStorage.getItem('user')
    const [user, setUser] = useState([]);

    useEffect(() => {
        retrieveUser();
    }, []);

    const retrieveUser = () => {
        UserDataService.get()
            .then((response) => {
                setUser(response.data)
                console.log(response.data)
            }).catch(() => {console.log('tu madre')})
    }

    

    // const change = (event) => {

    // }

    return (
        <div className='forms'>
            <h1>Your user</h1>
            <form className='formlogin' method="POST">
                <div>
                    <img src={fotaca} alt="fotaca" id='fotacaEdit'/>
                </div>
                <div>
                    <label>Username</label>
                    <input name="username" type="text" placeholder={user.username} autoFocus />
                </div>
                <div>
                    <label>Age</label>
                    <input name="Age" type="number" min="18" max="120" placeholder={user.age} />
                </div>
                <div id='buttons'>
                    <input type="submit" value="Change" />
                </div>
            </form>
        </div>
    );
}

export default UserList;