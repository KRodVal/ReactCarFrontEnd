import "./Card.css";
import coco from '../assets/images/coconut.png'
import { CCol, CContainer, CRow } from "@coreui/react";

export default function Card(props) {
    return (
        <CContainer>
            <CRow className="align-items-center">
                <CCol xs={3} className="logo">
                    <img src={coco} alt="coco" />
                </CCol>
                <CCol xs={4} className="brand">{props.marca}</CCol>
                <CCol className="model">{props.modelo}</CCol>
            </CRow>
        </CContainer>
    );
}