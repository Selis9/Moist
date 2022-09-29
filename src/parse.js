import axios from 'axios';

const url = 'http://localhost:8080'

const Parse = {
  getPlants: (endpoint) => {
    return axios.get(`${url}${endpoint}`)
  },

  addPlants: (endpoint, data) => {
    return axios.post(`${url}${endpoint}`, data)
  },

  update: (endpoint, data) => {
    return axios.put(`${url}${endpoint}`, data)
  },

  remove: (endpoint, params = '') => {
    return axios.delete(`${url}${endpoint}${params}`)
  },

  getWeather: () => {
    return axios.get(`https://api.weather.gov/gridpoints/SGX/37,61/forecast`)
  }
}

export default Parse;