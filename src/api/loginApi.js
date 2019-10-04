import { apiUrl, apiVersion } from './apiConstants'

export const post = (payload) => {
    return fetch(`${apiUrl}${apiVersion}/auth`,
        {
            method:'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'channel': 'getnet_adm',
                'scope': 'onboarding'
            }),
            body:JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => data)
}