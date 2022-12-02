import React, { useState, useEffect } from "react";
import './BrandsList.css';
import BrandDataService from '../services/BrandService';
import coco from '../assets/images/coconut.png'
import { CCol, CContainer, CRow } from "@coreui/react";

const BrandsList = () => {
    const [brands, setBrands] = useState([]);
    let logo;

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

    const refreshList = () => {
        retrieveBrands();
    };

    return (
        <>
            <div className="col-12">
                <h4 className="title">Brands</h4>

                {brands &&
                    brands.map((brand) => {
                        console.log(brand.logo_attachment);
                        return (
                            <CContainer className="CardContainer">
                                <CRow className="align-items-center">
                                    <CCol xs={3} className="logo">
                                        <img src={"localhost:3000/brands/1/logo"} alt="coco" />
                                    </CCol>
                                    <CCol xs={4} className="brands">{brand.brand_name}</CCol>
                                    <CCol className="models">{brand.country}</CCol>
                                </CRow>
                            </CContainer>
                        )
                    })
                }
            </div>
        </>
    );
}

export default BrandsList;