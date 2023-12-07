import axios from "axios"

const api = axios.create({
    baseURL: "tst-critiquill-18221148.azurewebsites.net",
});

export default api;