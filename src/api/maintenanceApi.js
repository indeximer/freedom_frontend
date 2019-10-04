import { apiUrl, apiVersion, createHeaders } from './apiConstants'

const apiEndpoint = '/internal/maintenance'

export const getAll = (page = 0, size = 15, params = '?status_reprocess=nok',) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}${params}&size=${size}&page=${page}&dir=DESC`,{'headers':headers})
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

export const postReply = (payload) => {
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

export const postMassReply = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/retry`,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(payload)
                })
                .then(response => {
                    if(response.status !== 201){
                        return response.json()
                    }else{
                        return response
                    }
                })
                .then(data => data)
        })
}

export const putDiscard = (payload) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiEndpoint}/${payload.id}/status/cancel`,
                {
                    method:'PUT',
                    headers:headers,
                    body:JSON.stringify(payload) 
                })
                .then(response => response.json())
                .then(data => data)
        })
}