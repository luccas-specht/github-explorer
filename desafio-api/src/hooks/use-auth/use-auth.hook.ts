import { useAxios } from '../api/use-axios.hook';

const axios = useAxios(
    'https://plataforma360-api-dsv.azurewebsites.net/api'
)

export const useAuth = () => {

    type login = string;
    type password = string;

    const authentication = async (login: login, password: password) => {
        try {
            const response = await axios.post('/Authentication/Login', { login: login, password: password })
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    return {
        authentication
    }
}