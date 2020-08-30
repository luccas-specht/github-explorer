import axios from 'axios';

export function useAxios(baseURL: any, headers?: any) {
    const axiosInstance = axios.create({
        baseURL,
        headers
    })
    return axiosInstance
}