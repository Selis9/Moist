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

  remove: (endpoint, data) => {
    return axios.delete(`${url}${endpoint}`, data)
  },

  getAPIWeather: () => {
    return axios.get(`https://api.weather.gov/gridpoints/SGX/37,61/forecast`)
  },

  getWeather: () => {
    return axios.get(`${url}/weather`);
  },

  saveWeather: (data) => {
    return axios.post(`${url}/weather`, data);
  }
}

export default Parse;