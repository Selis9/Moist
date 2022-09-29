import axios from 'axios';

const url = 'http://localhost:8080'

const Parse = {
  getPlants: (endpoint) => {
    return axios.get(`${url}${endpoint}`)
  },

  addPlants: (endpoint, data) => {
    return axios.post(`${url}${endpoint}`, data)
  },

  updatePlants: (endpoint, params = '') => {
    return axios.put(`${url}${endpoint}${params}`)
  },

  removePlants: (endpoint, params = '') => {
    return axios.delete(`${url}${endpoint}${params}`)
  },

}

export default Parse;