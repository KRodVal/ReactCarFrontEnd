import React, { useState, useEffect } from "react";
import './ModelsList.css';
import ModelDataService from '../../services/ModelService';
import BrandDataService from '../../services/BrandService';
import coco from '../../assets/images/coconut.png'
import { CCol, CContainer, CRow } from "@coreui/react";

const ModelsList = () => {
    const [models, setModels] = useState([]);
    const [brands, setBrands] = useState([]);
    const brand = "";
    const [currentModel, setCurrentModel] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    // const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveModels();
        retrieveBrands();
    }, []);

    // const onChangeSearchTitle = e => {
    //     const searchName = e.target.value;
    //     setSearchName(searchName);
    // };

    const retrieveModels = () => {
        ModelDataService.getAll()
            .then(response => {
                setModels(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };

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
        retrieveModels();
        retrieveBrands();
        setCurrentModel(null);
        setCurrentIndex(-1);
    };

    const setActiveModel = (model, index) => {
        setCurrentModel(model);
        setCurrentIndex(index);
    };

    // const removeAllModels = () => {
    //     ModelDataService.removeAll()
    //         .then(response => {
    //             console.log(response.data);
    //             refreshList();
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    // const findByName = () => {
    //     ModelDataService.findByName(searchName)
    //         .then(response => {
    //             setModels(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    return (
        <>
            <div className="col-12">
                <h4 className="title">Models</h4>

                {
                    models.map((model) => {
                        return (
                            <CContainer className="CardContainer">
                                <CRow className="align-items-center">
                                    <CCol xs={3} className="logo">
                                        <img src={model.brand.logo_attachment.record_type} alt="coco" />
                                    </CCol>
                                    <CCol xs={5} className="models">{model.model_nm}</CCol>
                                    <CCol className="brands">{model.brand.brand_name}</CCol>
                                </CRow>
                            </CContainer>
                        );
                    })
                }
            </div>
        </>
    );
}

export default ModelsList;