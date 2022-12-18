import { CHeader } from '@coreui/react';
import BrandsList from '../../components/List/BrandsList';
import Off from '../../components/OffCanvas/Off';

export default function Brands() {

    const logged = localStorage.getItem('role');

    return (

        <>
        {logged ? (
            <>
                <CHeader className='headerxd'></CHeader>
                <Off></Off>
                <BrandsList />
            </>

        ) :
            window.location.replace('/login')
        }
        </>



    );
};