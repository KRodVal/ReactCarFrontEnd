import React, { useState, useEffect } from "react";
import './ModelsList.css';
import ModelDataService from '../../services/ModelService';
import { CCol, CContainer, CRow } from "@coreui/react";

const ModelsList = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        retrieveModels();
    }, []);

    const retrieveModels = () => {
        ModelDataService.getAll()
            .then(response => {
                setModels(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <>
            <div className="col-12">
                <h4 className="title">Models</h4>

                {models.map((model) => {
                    return (
                        <CContainer className="CardContainer">
                            <CRow className="align-items-center">
                                <CCol xs={3} className="logo">
                                    <img src={model.logo} alt="coco" />
                                </CCol>
                                <CCol xs={5} className="models">{model.model_nm}</CCol>
                                <CCol className="brands">{model.brand.brand_name}</CCol>
                            </CRow>
                        </CContainer>
                    );
                })}
            </div>
        </>
    );
}

export default ModelsList;