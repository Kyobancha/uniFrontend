import axios from "axios";

function authenticate() {
    axios.defaults.baseURL = 'https://localhost:443'; //auch auslagern in global config
    axios.get('/publicUsers')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default authenticate
