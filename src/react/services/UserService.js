import axios from "axios";
import config from "../../config";
import { useSelector, useDispatch } from "react-redux";
// import { loginAsync, selectStatus, selectToken } from "./userSlice";

const host = config.get("connection.host");
const port = config.get("connection.port");
const connectionString = host + ":" + port;
axios.defaults.baseURL = connectionString;

function create(user) {
    return new Promise((resolve, reject) => {
        axios
        .post("/users", user)
        .then((response) => {
            console.log(response);
            resolve(response);
        })
        .catch((error) => {
            console.log(error);
        });
    })
}

function getAll(bearerToken) {
    axios.defaults.headers.common["Authorization"] = bearerToken;
    return new Promise((resolve, reject) => {
        axios
        .get("/users")
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error);
        });
    })
}

function get(bearerToken, userID) {
    axios.defaults.headers.common["Authorization"] = bearerToken;
    return new Promise((resolve, reject) => {
        axios
            .get(`/users/${userID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

function update(userID, newUser) {
    return new Promise((resolve, reject) => {
        axios
            .put(`/users/${userID}`, newUser)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

function remove(userID) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/users/${userID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

export { create, getAll, get, update, remove };
