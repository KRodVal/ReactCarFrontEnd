import { CHeader } from '@coreui/react';
import ModelsList from '../../components/List/ModelsList';
import Off from '../../components/OffCanvas/Off';


export default function Models() {

    const logged = localStorage.getItem('role');

    return (
        <>
            {logged ? (
                <>
                    <CHeader className='headerxd'></CHeader>
                    <Off></Off>
                    <ModelsList />
                </>
            ) :
                window.location.replace('/login')
            }
        </>


    );
};