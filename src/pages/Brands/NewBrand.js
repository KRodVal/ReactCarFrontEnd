import { CHeader } from '@coreui/react';
import Off from '../../components/OffCanvas/Off';
import CreateBrand from '../../components/Create/BrandForm';

export default function NewModel() {
    
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>
            <CreateBrand/>
        </>

    );
};