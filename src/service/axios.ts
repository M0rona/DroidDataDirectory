import axios from "axios";

export const apiSw = axios.create({
    baseURL: "https://swapi.dev/api/",
    headers: {
        "Content-Type": "application/json",
    }
})