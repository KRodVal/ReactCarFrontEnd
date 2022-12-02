import './SignupForm.css';

const SignupForm = () => {
    return (
        <div className='forms'>
            <form className='formsignup'>
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
                    <input type="submit" value="Register"/>
                    <input type="file" value="Clear"/>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;