import { CHeader } from '@coreui/react';
import BrandsList from '../components/BrandsList';
import Off from '../components/Off';

export default function Brands() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>
            <BrandsList />
        </>

    );
};