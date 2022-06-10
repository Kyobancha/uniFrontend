import axios from "axios";

function getAll() {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function get(userId) {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function create(user) {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.post('/publicUsers', user)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function update(userId) {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function remove(userId) {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default {getAll, get, create, update, remove}