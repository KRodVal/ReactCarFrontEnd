import { CHeader } from '@coreui/react';
import UserList from '../../components/List/UserList';
import Off from '../../components/OffCanvas/Off';

export default function User() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off />
            <UserList/>
        </>
    );
};