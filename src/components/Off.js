import { useState } from 'react';
import './Off.css';
import Hamb from '../assets/images/hamburger.png';
import Hambright from '../assets/images/hambright.png';
import coco from '../assets/images/coconut.png';
import { CContainer, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from '@coreui/react';

const Off = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <img id='Hamb' src={Hamb} onClick={() => setVisible(true)} />
            <COffcanvas placement='start' visible={visible} onHide={() => setVisible(false)}>
                <COffcanvasHeader className='offinternal'>
                    <COffcanvasTitle>
                        <img id='Hamb' src={Hambright} onClick={() => setVisible(false)} />
                    </COffcanvasTitle>
                </COffcanvasHeader>
                <COffcanvasBody className='offinternal' id='offbody'>
                    <CContainer>
                        <CContainer className='offtext'>
                            <a href='/brands'>Brands</a>
                        </CContainer>
                        <CContainer className='offtext'>
                            <a href='/models'>Models</a>
                        </CContainer>
                    </CContainer>
                </COffcanvasBody>
            </COffcanvas>
        </>
    );

}

export default Off;