import React, { useState, useEffect } from "react";
import './BrandsList.css';
import BrandDataService from '../services/BrandService';
import coco from '../assets/images/coconut.png'
import { CCol, CContainer, CRow } from "@coreui/react";

const BrandsList = () => {
    const [brands, setBrands] = useState([]);
    const [currentBrand, setCurrentBrand] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveBrands();
    }, []);

    // const onChangeSearchTitle = e => {
    //     const searchName = e.target.value;
    //     setSearchName(searchName);
    // };

    const retrieveBrands = () => {
        BrandDataService.getAll()
            .then(response => {
                setBrands(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveBrands();
        setCurrentBrand(null);
        setCurrentIndex(-1);
    };

    const setActiveBrand = (brand, index) => {
        setCurrentBrand(brand);
        setCurrentIndex(index);
    };

    // const removeAllBrands = () => {
    //     BrandDataService.removeAll()
    //         .then(response => {
    //             console.log(response.data);
    //             refreshList();
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    // const findByName = () => {
    //     BrandDataService.findByName(searchName)
    //         .then(response => {
    //             setBrands(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    return (
        <>
            <div className="col-md-6">
                <h4>Tutorials List</h4>

                {brands &&
                    brands.map((brand, index) => (
                        <CContainer>
                            <CRow className="align-items-center">
                                <CCol xs={3} className="logo">
                                    <img src={coco} alt="coco" />
                                </CCol>
                                <CCol xs={4} className="brand">{brand.brand_name}</CCol>
                                <CCol className="model">{brand.country}</CCol>
                            </CRow>
                        </CContainer>
                    ))}
            </div>
        </>
    );
}

export default BrandsList;