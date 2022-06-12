import axios from "axios";

function authenticate(name, password) {
    axios.defaults.baseURL = "https://localhost:443"; //auch auslagern in global config
    return new Promise((resolve, reject) => {
        axios.get("/authenticate", {
            auth: {
                username: name,
                password: password,
            },
        })
        .then(response => {
            resolve(response.headers.authorization);
        })
        .catch(error => {
            reject(error);
        });
    })
}

export default authenticate;
