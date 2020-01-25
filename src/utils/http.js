import axios from 'axios'

// Point to given base url or default to domain on which client is running
let baseURL = window.location.protocol + '//' + window.location.host

if (process.env.VUE_APP_BASE_URL) {
  baseURL = process.env.VUE_APP_BASE_URL
}

axios.defaults.baseURL = baseURL

const http = axios.create({
  withCredentials: true,
  headers: {
    'X-Device-Type': 'Web',
    'X-App-Version': '1.0',
  },
})

http.interceptors.request.use(
  config => {
    /* Set headers here */
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      /* User isn't authenticated so call logout() */
    }
    return Promise.reject(error)
  }
)

export default http
