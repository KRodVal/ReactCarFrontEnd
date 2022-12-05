import axios from 'axios';


const login = params => {
    var config = {
        method: 'post',
        url: 'http://localhost:3000/login',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: params
    };

    return axios(config);
};

const signup = params => {
    var config = {
        method: 'post',
        url: 'http://localhost:3000/signup',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: params
    };

    return axios(config);
};

const UserService = {
    login,
    signup
};

export default UserService;