import axios from "axios";

export const request = axios.create({
    baseURL: 'https://621b616ffaa12ee4500c81af.mockapi.io/',
    responseType: 'json'
});