import { CHeader } from '@coreui/react';
import BrandsList from '../../components/BrandsList/BrandsList';
import Off from '../../components/OffCanvas/Off';

export default function Brands() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>
            <BrandsList />
        </>

    );
};