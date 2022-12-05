import { CHeader } from '@coreui/react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Off from '../../components/OffCanvas/Off';

export default function Login() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off/>
            <LoginForm/>
        </>
    );
};