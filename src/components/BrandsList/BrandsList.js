import React, { useState, useEffect } from "react";
import './BrandsList.css';
import BrandDataService from '../../services/BrandService';
import { CCol, CContainer, CRow } from "@coreui/react";
import coco from '../../assets/images/coconut.png';
import trash from '../../assets/images/trash.png';

const BrandsList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        retrieveBrands();
    }, []);

    const retrieveBrands = () => {
        BrandDataService.getAll()
            .then(response => {
                setBrands(response.data);
                console.log(response)
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <>
            <div className="col-12">
                <h4 className="title">Brands</h4>

                {brands.map((brand) => {
                    return (
                        <CContainer className="CardContainer">
                            <CRow className="align-items-center">
                                <CCol xs={3} className="logo">
                                    <img src={brand.logo} alt="coco" />
                                </CCol>
                                <CCol xs={4} className="brands">{brand.brand_name}</CCol>
                                <CCol xs={3} className="models">{brand.country}</CCol>
                                <CCol xs={2} className="delete" onClick={() => BrandDataService.remove(brand.id)}>
                                    <img id="trash" src={trash} alt="delete"/>
                                </CCol>
                            </CRow>
                        </CContainer>
                    )
                })}
            </div>
        </>
    );
}

export default BrandsList;