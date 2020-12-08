import axios from "axios"

const BASE_URL = "http://localhost:3001/persons"


const getAll = () => {
  return axios.get(BASE_URL)
      .then(res => res.data)
}

const create = (newObject) => {
  return axios.post(BASE_URL, newObject)
    .then(res => res.data)
}

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`)
}

const update = (id, newObject) => {
  return axios.put(`${BASE_URL}/${id}`, newObject)
  .then(res => res.data)
}

export default {getAll, create, deletePerson, update}