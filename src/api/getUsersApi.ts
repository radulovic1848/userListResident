import axios, {AxiosResponse} from 'axios';
import {UserData} from '../components/User/types'

const getUsersApi = {
    getUsers: async() : Promise<AxiosResponse<UserData[]>> => {
        try {
            return await axios.get<UserData[]>("https://api.github.com/users?page=1&per_page=100")
        } catch (err: any) {
            return err['response']
        }
    }
}

export default getUsersApi;