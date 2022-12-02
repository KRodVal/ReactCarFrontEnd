import SignupForm from '../components/SignupForm.js';
import { CHeader } from '@coreui/react';

export default function Signup() {
    return(
        <>
        <CHeader className='headerxd'></CHeader>
        <div className='forms'>
        <SignupForm/>
        </div>
        
        </>
    );
};