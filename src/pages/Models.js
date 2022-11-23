import { CHeader } from '@coreui/react';
import ModelsList from '../components/ModelsList';
import Off from '../components/Off';


export default function Models() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>
            <ModelsList />
        </>

    );
};