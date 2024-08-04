import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-de-turismo.onrender.com/",
    timeout: 8 * 1000,
});