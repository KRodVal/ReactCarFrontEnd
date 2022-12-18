import React, { useState, useEffect } from "react";
import './BrandsList.css';
import BrandDataService from '../../services/BrandService';
import { CCol, CContainer, CRow } from "@coreui/react";
import trash from '../../assets/images/trash.png';
import { Link } from "react-router-dom";
import add from "../../assets/images/plus.png";

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
                    let url = `/brands/${brand.id}`
                    return (
                        <CContainer className="CardContainer">
                            <CRow className="align-items-center">

                                <CCol xs={3} className="logo">
                                    <Link to={url} >
                                        <img src={brand.logo} alt="coco" />
                                    </Link>
                                </CCol>
                                <CCol xs={4} className="brands">
                                    {brand.brand_name}
                                </CCol>
                                <CCol xs={3} className="models">{brand.country}</CCol>

                                <CCol xs={2} className="delete" onClick={() => BrandDataService.remove(brand.id)}>
                                    <Link to="/brands" >
                                        <img id="trash" src={trash} alt="delete" />
                                    </Link>
                                </CCol>
                            </CRow>
                        </CContainer>
                    )
                })}


                <CContainer className="CardContainer">
                    <CRow className="align-items-center">
                        <CCol xs={3} className="logo">
                            <Link to="/brands/create">
                                <img src={add} alt="add" />
                            </Link>
                        </CCol>
                        <CCol xs={4} className="brands">
                            <h1>Create</h1>
                        </CCol>
                        <CCol xs={3} className="models">
                            <h1>Brand</h1>
                        </CCol>
                        <CCol xs={2} className="logo">
                            <Link to="/brands/create" >
                                <img id="trash" src={add} alt="add" />
                            </Link>
                        </CCol>
                    </CRow>
                </CContainer>

            </div>
        </>
    );
}

export default BrandsList;