import axios from "axios";
import {API_URL} from "../../config";


const register = (email: string, password: string, firstName: string, lastName: string) => {
    return axios.post(API_URL + "/v1/auth/email/register", {
        email,
        password,
        firstName,
        lastName
    });
};

const login = (email: string, password: string) => {
    return axios
        .post(API_URL + "/v1/auth/email/login", {
            email,
            password,
        })
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;