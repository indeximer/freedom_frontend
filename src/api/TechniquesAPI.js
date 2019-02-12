import { apiUrl } from './apiConstants'
const endPoind = '/techniques';

export const getAll = () => {
    return fetch(`${apiUrl}${endPoind}`)
      .then((response) => response.json())
      .then((data) => data)
}

export const getById = (id) => {
  return fetch(`${apiUrl}${endPoind}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
}

export const add = (payload) => {
  return fetch(`${apiUrl}${endPoind}`)
    .then((response) => response.json())
    .then((data) => data)
}

export const update = (payload) => {
  return fetch(`${apiUrl}${endPoind}`)
    .then((response) => response.json())
    .then((data) => data)
}