import http from '../http-common';

const getAll = () => {
    return http.get("models");
};

const get = id => {
    return http.get('/models/${id}');
};

const create = data => {
    return http.post("/models", data);
};

const update = (id, data) => {
    return http.put('/models/${id}');
};

const remove = id => {
    return http.delete('models/${id}');
};

const removeAll = () => {
    return http.delete('models');
};

const findByName = nm => {
    return http.get('/models?nm=${nm}');
};

const ModelService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName
};

export default ModelService;