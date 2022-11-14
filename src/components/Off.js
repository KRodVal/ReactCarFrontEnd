import { useState } from 'react';
import './Off.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hamb from '../assets/images/hamburger.png';

export default function Off() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img id='Hamb' src={Hamb} variant="primary" onClick={handleShow}/>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>OffCanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <a>Cosa 1</a>
                    <a>Cosa 2</a>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}