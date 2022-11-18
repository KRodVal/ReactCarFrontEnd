import http from '../http-common';

const getAll = () => {
    return http.get("/brands");
};

const get = id => {
    return http.get('/brands/${id}');
};

const create = data => {
    return http.post("/brands", data);
};

const update = (id, data) => {
    return http.put('/brands/${id}');
};

const remove = id => {
    return http.delete('brands/${id}');
};

const removeAll = () => {
    return http.delete('brands');
};

const findByName = nm => {
    return http.get('/brands?brand_name=${nm}');
};

const BrandService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName
};

export default BrandService;