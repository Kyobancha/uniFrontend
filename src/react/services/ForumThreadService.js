import axios from "axios";
import config from "../../config";
import { useSelector, useDispatch } from "react-redux";
// import { loginAsync, selectStatus, selectToken } from "./userSlice";

const host = config.get("connection.host");
const port = config.get("connection.port");
const connectionString = host + ":" + port;
axios.defaults.baseURL = connectionString;

function create(thread) {
    return new Promise((resolve, reject) => {
        axios
        .post("/forumThreads", thread)
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
        .get("/forumThreads")
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error);
        });
    })
}

function get(bearerToken, threadID) {//rework
    axios.defaults.headers.common["Authorization"] = bearerToken;
    return new Promise((resolve, reject) => {
        axios
            .get(`/forumThreads/${threadID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

function update(threadID, newThread) {
    return new Promise((resolve, reject) => {
        axios
            .put(`/forumThreads/${threadID}`, newThread)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

function remove(threadID) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/forumThreads/${threadID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

export { create, getAll, get, update, remove };
