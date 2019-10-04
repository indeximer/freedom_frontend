import { apiUrl, apiVersion, createHeaders } from './apiConstants'

const apiEndpoint = '/internal/media-storage'

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