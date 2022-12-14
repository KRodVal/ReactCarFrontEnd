import { CHeader } from '@coreui/react';
import ModelForm from '../../components/Create/Modelform';
import Off from '../../components/OffCanvas/Off';

export default function NewModel() {

    const logged = localStorage.getItem('role');

    return (

        <>
            {logged ? (
                <>
                    <CHeader className='headerxd'></CHeader>
                    <Off></Off>
                    <ModelForm />
                </>
            ) :
                window.location.replace('/login')
            }
        </>

    );
};