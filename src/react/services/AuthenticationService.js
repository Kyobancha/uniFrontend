import axios from "axios";
import config from '../../config';

function authenticate(name, password) {
    const host = config.get("connection.host");
    const port = config.get("connection.port");
    console.log(host + ":" + port)
    const connectionString = host + ":" + port;
    axios.defaults.baseURL = connectionString; //auch auslagern in global config
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
