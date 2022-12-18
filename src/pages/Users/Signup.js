import { CHeader } from '@coreui/react';
import SignupForm from '../../components/Create/SignupForm.js';
import Off from '../../components/OffCanvas/Off';

export default function Signup() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off />
            <SignupForm />
        </>
    );
};