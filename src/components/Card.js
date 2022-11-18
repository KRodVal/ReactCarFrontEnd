import "./Card.css";
import coco from '../assets/images/coconut.png'
import { CCol, CContainer, CRow } from "@coreui/react";

export default function Card() {
    return (
        <CContainer>
            <CRow className="align-items-center">
                <CCol xs={3} className="logo">
                    <img src={coco} alt="coco" />
                </CCol>
                <CCol xs={4} className="brand">Marca</CCol>
                <CCol className="model">Modelo</CCol>
            </CRow>
        </CContainer>
    );
}