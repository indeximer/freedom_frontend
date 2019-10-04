import { apiUrl, apiVersion, createHeaders } from './apiConstants'

const apiEndpoint = '/internal/promo-codes'

export const getAll = () => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}?size=50`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
        })
}

export const search = (param) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}?parameter=${param}`,{'headers':headers})
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
                    body:JSON.stringify(payload)
                })
                .then(response => response.json())
                .then(data => data)
        })
}

export const uploadCSV = (payload) => {
    return createHeaders()
        .then((headers) => {

            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/upload`,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(payload)
                })
                .then(response => response.json())
                .then(data => data)
        })
}

export const updateStatus = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${payload.promo_code}`,
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
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${payload.promo_code}`,
                {
                    method:'PUT',
                    headers:headers,
                    body:JSON.stringify(payload) 
                })
                .then(response => response.json())
                .then(data => data)
        })
}