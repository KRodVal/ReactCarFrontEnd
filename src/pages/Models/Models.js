import { CHeader } from '@coreui/react';
import ModelsList from '../../components/ModelsList/ModelsList';
import Off from '../../components/OffCanvas/Off';


export default function Models() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>
            <ModelsList />
        </>

    );
};