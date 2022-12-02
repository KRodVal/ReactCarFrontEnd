import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='forms'>
            <form className='formlogin'>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" autofocus/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"  placeholder="Password"/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" min="18" max="120"/>
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