import './LoginForm.css';
import UserDataService from '../../services/UserService';

const LoginForm = () => {

    const doLogin = (event) => {
        event.preventDefault();
        const params = {
            username: event.target.username.value,
            password: event.target.password.value
        }
    
        UserDataService.login(params)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('username', response.data.user.username)
            window.localStorage.setItem('age', response.data.user.age)
            window.localStorage.setItem('role', response.data.user.role)
            window.location = "/brands"
        })
        .catch(e => {
            console.log(e)
        })
    }
    //

    return (
        <div className='forms'>
            <h1>Log In</h1>
            <form className='formlogin' onSubmit={doLogin} method="POST">
                <div>
                    <label>Username</label>
                    <input name="username" type="text" placeholder="Username" autoFocus/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"  placeholder="Password"/>
                </div>
                <div id='buttons'>
                    <input type="submit" value="Log In"/>
                    <input type="reset" value="Clear"/>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;