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

const get = () => {

    var data = new FormData();
    data.append('id', localStorage.getItem('user'));
    
    var config = {
        method: 'get',
        url: 'http://localhost:3000/get_user',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : "bearer " + localStorage.getItem("token")
        },
        data: data
    };

    return axios(config);
}

const UserService = {
    login,
    signup,
    get
};

export default UserService;