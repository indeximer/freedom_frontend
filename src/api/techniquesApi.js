import { apiUrl } from './apiConstants'
const endPoint = '/Techniques'

export const getAll = () => {
    return fetch(`${apiUrl}${endPoint}`)
      .then((response) => response.json())
      .then((data) => data)
}

export const getById = (id) => {
  return fetch(`${apiUrl}${endPoint}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
}

export const add = (payload) => {
  return fetch(`${apiUrl}${endPoint}`)
    .then((response) => response.json())
    .then((data) => data)
}

export const update = (payload) => {
  return fetch(`${apiUrl}${endPoint}`)
    .then((response) => response.json())
    .then((data) => data)
}