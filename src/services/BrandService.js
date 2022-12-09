import http from '../http-common';
import axios from 'axios';

const getAll = () => {
    return http.get("/brands");
};

const get = id => {
    return http.get(`/brands/${id}`);
};

const getImage = id => {
    return http.get(`/brands/${id}/logo`);
};

const create = params => {
    
    var data = new FormData();
    data.append('brand_name', params.brand_name);
    data.append('country', params.country);
    data.append('logo', params.logo);
    

    var config = {
        method: 'post',
        url: 'http://localhost:3000/brands',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : "bearer " + localStorage.getItem("token")
        },
        data: data
    };

    return axios(config);
};

const update = (id, data) => {
    return http.put(`/brands/${id}`);
};

const remove = id => {
    return http.delete(`brands/${id}`);
};

const removeAll = () => {
    return http.delete('brands');
};

const findByName = nm => {
    return http.get(`/brands?brand_name=${nm}`);
};

const BrandService = {
    getAll,
    get,
    getImage,
    create,
    update,
    remove,
    removeAll,
    findByName
};

export default BrandService;