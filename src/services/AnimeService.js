import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
  withCredentials: false,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  }
})

export default {
  // add call methods here. below is sample of form.
  getData(params) {
    return apiClient.get(params)
  }
}
