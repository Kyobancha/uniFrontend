import axios from "axios";
import config from "../../config";
import { useSelector, useDispatch } from "react-redux";
// import { loginAsync, selectStatus, selectToken } from "./userSlice";

const host = config.get("connection.host");
const port = config.get("connection.port");
const connectionString = host + ":" + port;
axios.defaults.baseURL = connectionString;

function create(message) {
    return new Promise((resolve, reject) => {
        axios
        .post("/forumMessages", message)
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
        .get("/forumMessages")
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error);
        });
    })
}

function getByThreadID(bearerToken, threadID) {
    axios.defaults.headers.common["Authorization"] = bearerToken;
    return new Promise((resolve, reject) => {
        axios
            .get(`/forumMessages?forumThreadID=${threadID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

function get(bearerToken, messageID) {
    axios.defaults.headers.common["Authorization"] = bearerToken;
    return new Promise((resolve, reject) => {
        axios
            .get(`/forumMessages/${messageID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    })
}

function update(messageID, newMessage) {
    return new Promise((resolve, reject) => {
        axios
            .put(`/forumMessages/${messageID}`, newMessage)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

function remove(messageID) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/forumMessages/${messageID}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

export { create, getAll, getByThreadID, get, update, remove };
