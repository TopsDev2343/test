import axios from 'axios'
import { BaseUrl } from '@/configs'
import { getStorage } from '@/services/localStorage'

const apiClient = axios.create({
    baseURL: `${BaseUrl}/api`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000,
})

apiClient.interceptors.request.use(
    async config => {
        const token = await getStorage('token')
        // if (token)
        //     config.headers['Authorization'] = `Bearer ${token}`
        console.log(JSON.stringify(config));
        return config;
    })

apiClient.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response.data))
    return response
})

export default apiClient