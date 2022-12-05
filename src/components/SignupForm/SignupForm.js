import './SignupForm.css';
import UserDataService from '../../services/UserService';

const doSignup = (event) => {
    event.preventDefault();

    const params = {
        username: event.target.username.value,
        password: event.target.password.value,
        age: event.target.age.value
    }

    UserDataService.signup(params)
    .then(() => {
        window.location = "/brands"
    })
    .catch(e => {
        console.log(e)
    })
}

const SignupForm = () => {
    return (
        <div className='forms'>
            <form className='formlogin' onSubmit={doSignup} method="POST">
                <div>
                    <label>Username</label>
                    <input name="username" type="text" placeholder="Username" autoFocus/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password"  placeholder="Password"/>
                </div>
                <div>
                    <label>Age</label>
                    <input name="age" type="number" min="18" max="120"/>
                </div>
                <div id='buttons'>
                    <input type="submit" value="Log In"/>
                    <input type="reset" value="Clear"/>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;