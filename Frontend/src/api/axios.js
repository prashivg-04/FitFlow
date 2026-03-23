import axios from 'axios';
import { toast } from 'sonner';

let onUnauthorized = null;

export const setUnauthorizedHandler = (handler) => {
    onUnauthorized = handler;
};

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const status = error.response?.status;
        const message = 
            error.response?.data?.message ||
            'Something went wrong';

        if(status === 401 && onUnauthorized) {
            onUnauthorized?.();
        }

        toast.error(message);
        return Promise.reject(error);
    }
)

export default api;