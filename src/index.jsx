import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import authStore from './stores/Auth';

if (!PRODUCTION) {
    window.axios = axios;
}

if (localStorage.token) {
    Object.assign(axios.defaults, { headers: { authorization: `Bearer ${localStorage.token}` } });
}

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        authStore.loggedIn = false;
        authStore.user = {};
    }
    return error;
});

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);

//module.hot.accept();
