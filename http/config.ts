import axios from 'axios'

const localDomain = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer 2264b5e4aa907f47f315156479f0fa0ca07f55421d820b8e829f49d7c740e3f7',
  },
})

const domain = localDomain
domain.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return error.response || { data: { message: 'Network Error' } }
  }
)

export default domain
