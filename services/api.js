import axios from "axios";

const CMC_API = axios.create({
    baseURL: "http://localhost:3002",
});

export default CMC_API;
