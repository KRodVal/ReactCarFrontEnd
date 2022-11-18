import React, { useState, useEffect } from "react";
import BrandDataService from '../services/BrandService';

const BrandsList = () => {
    const [brands, setBrands] = useState([]);
    const [currentBrand, setCurrentBrand] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveBrands();
    }, []);

    const onChangeSearchTitle = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
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
        retrieveBrands();
        setCurrentBrand(null);
        setCurrentIndex(-1);
    };

    const setActiveBrand = (brand, index) => {
        setCurrentBrand(brand);
        setCurrentIndex(index);
    };

    const removeAllBrands = () => {
        BrandDataService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        BrandDataService.findByName(searchName)
            .then(response => {
                setBrands(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list-group">
            {brands &&
                brands.map((brand, index) => {
                    <p key={index}>{brand.brand_name}</p>
                })
            }
        </div>
    );
}

export default BrandsList;