import { CHeader } from '@coreui/react';
import ModelForm from '../../components/Create/Modelform';
import Off from '../../components/OffCanvas/Off';

export default function NewModel() {
    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>
            <ModelForm/>
        </>

    );
};