import { apiUrl, apiVersion, createHeaders } from './apiConstants'

const apiEndpoint = '/internal/offerings'
const params = '/all-offerings/' /*'?country=BR&channel=santander_front&fiscal_type=company&acquirer_merchant_category_code=7008'*/

export const getAll = () => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}${params}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
        })
}

export const getById = (id) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
        })
}

export const getFilters = () => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/filters?lang=pt_br`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
        })
}

export const add = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}`,
                {
                    method:'POST',
                    headers:headers,
                    body:payload
                })
                .then(response => response.json())
                .then(data => data)
        })
}

export const updateStatus = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${payload.offering_id}/status`,
                {
                    method:'PUT',
                    headers:headers,
                    body:JSON.stringify(payload) 
                })
                .then(response => response.json())
                .then(data => data)
        })
}

export const edit = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${payload.offering_id}`,
                {
                    method:'PUT',
                    headers:headers,
                    body:JSON.stringify(payload) 
                })
                .then(response => response.json())
                .then(data => data)
        })
}

export const editFilters = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${payload.offering_id}/filters`,
                {
                    method:'PUT',
                    headers:headers,
                    body:JSON.stringify(payload) 
                })
                .then(response => response.json())
                .then(data => data)
        })
}