import { apiUrl, apiVersion, createHeaders } from './apiConstants'

const apiEndpoint = "/internal/products?size=4000"

export const getPropducts = () => (
    createHeaders()
        .then((headers) => (
            fetch(`${apiUrl}${apiVersion}${apiEndpoint}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
        ))
)

export const addPropduct = (payload) => (
    createHeaders()
        .then((headers) => (
            fetch(`${apiUrl}${apiVersion}/internal${apiEndpoint}`,{
                'method':'POST',
                'body': payload,
                'headers':headers
            })
                .then(response => response.json())
                .then(data => data)
        ))
) 