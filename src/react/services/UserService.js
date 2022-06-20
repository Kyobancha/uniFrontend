import axios from "axios";

function create() {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function get() {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function update() {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function remove() {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export { create, get, update, remove }