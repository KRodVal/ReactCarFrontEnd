import { useState } from 'react';
import './Off.css';
import Hamb from '../assets/images/hamburger.png';
import { COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from '@coreui/react';

export default function Off() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <img id='Hamb' src={Hamb} onClick={() => setVisible(true)} />
            <COffcanvas placement='start' visible={visible} onHide={() => setVisible(false)}>
                <COffcanvasHeader>
                    <COffcanvasTitle>
                    <img id='Hamb' src={Hamb} onClick={() => setVisible(false)} />
                    </COffcanvasTitle>
                </COffcanvasHeader>
                <COffcanvasBody>
                    
                </COffcanvasBody>
            </COffcanvas>
        </>
    );

}