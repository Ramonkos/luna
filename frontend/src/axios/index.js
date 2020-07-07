import axios from 'axios';
import {baseUrl} from '../constants';
import {store} from '../store';

const Axios = axios.create({
    baseUrl: baseUrl
});

Axios.defaults.baseURL = baseUrl;

Axios.defaults.headers.post['Content-Type'] = 'application/json';

Axios.interceptors.request.use(function (config) {
    const token = store.getState().loginReducer.token;
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config
});

export default Axios