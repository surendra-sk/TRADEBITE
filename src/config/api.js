import  axios  from "axios";


export const API_BASE_URL = "https://tradebite.onrender.com";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;
