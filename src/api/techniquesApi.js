import { apiUrl, request } from './apiConstants'
const endPoint = '/Techniques'

export const getAll = () => request(endPoint)
export const getById = (id) => request(`${endPoint}/${id}`)
export const add = (payload) => request(endPoint, payload, 'POST')
export const update = (id, payload) => request(`${endPoint}/${id}`, payload, 'PUT')
export const remove = (id) => request(`${endPoint}/${id}`, null, 'DELETE')