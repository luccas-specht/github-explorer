import { useAxios } from '../api/use-axios.hook';

const axios = useAxios(
    'https://plataforma360-api-dsv.azurewebsites.net/api',
    {
        Authorization: `Bearer ${localStorage.getItem('@token')}`,
        'Accept-Language': 'pt-BR,pt;q=0.9'
    }
)

export const useClient = () => {

    type id = number;

    const getClient = async (id: id) => {
        try {
            const response = await axios.get(`/Cliente/${id}`)
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    const getClients = async () => {
        try {
            const response = await axios.get('/Cliente')
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    return {
        getClient,
        getClients
    }
}