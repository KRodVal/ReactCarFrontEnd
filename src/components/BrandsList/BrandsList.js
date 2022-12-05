import React, { useState, useEffect } from "react";
import './BrandsList.css';
import BrandDataService from '../../services/BrandService';
import { CCol, CContainer, CRow } from "@coreui/react";

const BrandsList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        retrieveBrands();
    }, []);

    const retrieveBrands = () => {
        BrandDataService.getAll()
            .then(response => {
                setBrands(response.data);
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
                                <CCol className="models">{brand.country}</CCol>
                            </CRow>
                        </CContainer>
                    )
                })}
            </div>
        </>
    );
}

export default BrandsList;