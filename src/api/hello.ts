import axios from "axios"
import {SERVER_URL} from "../config";
import authHeader from "./auth/header";

// TODO add axios interceptor
// TODO: why using axios?
// does fetch has interceptors?

export default function getUsers(){
    return axios.get(SERVER_URL + "/", { headers: authHeader() }).then(res => res.data);
}

