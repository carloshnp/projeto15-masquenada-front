import axios from "axios";

const BASE_URL = "https://masquenada-api.onrender.com";

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
};

function postSignIn(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
};

export { postSignUp, postSignIn };