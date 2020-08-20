import axios from 'axios'

export function useAxios(baseURL: any) {
    const axiosInstance = axios.create({
        baseURL
    })
    return axiosInstance
}