import { CHeader } from '@coreui/react';
import Off from '../../components/OffCanvas/Off';
import CreateBrand from '../../components/Create/BrandForm';

export default function NewModel() {

    const logged = localStorage.getItem('role');

    return (
        <>
            {logged ? (
                <>
                    <CHeader className='headerxd'></CHeader>
                    <Off></Off>
                    <CreateBrand />
                </>
            ) :
                window.location.replace('/login')
            }
        </>

    );
};