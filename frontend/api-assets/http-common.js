import axios from "axios";

export const httpCommon = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_APP_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});
