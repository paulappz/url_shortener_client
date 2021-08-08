import axios from "axios";
import constants from "./config/constants";
axios.defaults.baseURL = constants.apiUrl;
export const createShortUrl = obj => {
    const requestUrl = "encode";
    return axios.post(requestUrl, obj);
};
export const getAllUrl = obj => {
    const requestUrl = "list";
    return axios.get(requestUrl);
};
