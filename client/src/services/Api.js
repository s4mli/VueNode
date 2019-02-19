import axios from 'axios'

export default () => {
    /**
     * API endpoint (env: API_ROOT)
     */
    return axios.create({
        baseURL: process.env.API_ROOT || `http://localhost:3000`
    })
}
