import { useAxios } from '../api/use-axios.hook'

export const useGitHubApi = () => {

    const axios = useAxios(
        'https://api.github.com/'
    )

    async function getRepository(repository: string) {
        try {
            const result = await axios.get(`repos/${repository}`)
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getRepository
    }
}