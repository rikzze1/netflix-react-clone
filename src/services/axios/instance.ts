import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_URL,
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
        "Accept": "application/json"
    }
})