import { CHeader, CCol, CContainer, CRow } from '@coreui/react';
import Off from '../../components/OffCanvas/Off';
import trash from '../../assets/images/trash.png';
import BrandDataService from '../../services/BrandService';
import {
    useParams
  } from "react-router-dom";

export default function OneBrand() {
    let { id } = useParams();
    const brand = BrandDataService.get(id)
    console.log(BrandDataService.get(id).value);

    return (
        <>
            <CHeader className='headerxd'></CHeader>
            <Off></Off>

            <CContainer className="CardContainer">
                <CRow className="align-items-center">
                    <CCol xs={3} className="logo">
                        <img src={brand.logo} alt="coco" />
                    </CCol>
                    <CCol xs={4} className="brands">{brand.brand_name}</CCol>
                    <CCol xs={3} className="models">{brand.country}</CCol>
                    <CCol xs={2} className="delete" onClick={() => BrandDataService.remove(brand.id)}>
                        <img id="trash" src={trash} alt="delete" />
                    </CCol>
                </CRow>
            </CContainer>
        </>
    );
};