import axios from "axios";

export const fetch = axios.create({
    baseURL: 'https://621b616ffaa12ee4500c81af.mockapi.io/',
    responseType: 'json'
});