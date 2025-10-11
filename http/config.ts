import axios from 'axios'

const localBaseURL = 'http://localhost:3001'
const localDomain = axios.create({
  baseURL: localBaseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 2264b5e4aa907f47f315156479f0fa0ca07f55421d820b8e829f49d7c740e3f7',
  },
})

const liveBaseURL = 'https://api-coop-digital-2-8f895bf0111e.herokuapp.com'
const liveDomain = axios.create({
  baseURL: liveBaseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 2264b5e4aa907f47f315156479f0fa0ca07f55421d820b8e829f49d7c740e3f7',
  },
})

export const baseURL = localBaseURL
const domain = localDomain
domain.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return error.response || { data: { message: 'Network Error' } }
  }
)

export default domain
