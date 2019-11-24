export const apiUrl = process.env.REACT_APP_API_ROOT

export const validateApiToken = () => {
    let token = sessionStorage.getItem('api-token')
    let expires_in = sessionStorage.getItem('api-token-expires_in')
    let openToken

    try {
        openToken = token.split('.')[1]
        openToken = atob(openToken)
        openToken = JSON.parse(openToken)
    } catch (e) {
        openToken = {}
    }


    if (openToken.hasOwnProperty('channel')) {
        if (Date.now() < expires_in && openToken.channel === "adm") {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

const headers = () => {
    return new Headers({
        'Authorization': sessionStorage.getItem('api-token'),
        'Content-Type': 'text/plain',
        'session-flow-id': sessionStorage.getItem('session-id'),
    })
}

export const createHeaders = () => {
    return new Promise((resolve, reject) => {
        if (validateApiToken()) {
            resolve(headers())
        } else {
            sessionStorage.removeItem('api-token')
            sessionStorage.removeItem('user-email')
            sessionStorage.removeItem('user-name')
            sessionStorage.removeItem('user-roles')
            window.location.href = '/'
        }
    })
}

export async function request(endPoint, params = null, method = 'GET') {

    const options = {
        method,
        headers: {
            'Content-Type': 'text/plain'
        }
    }

    if (params) {
        if (method === 'GET') {
            endPoint += '?' + objectToQueryString(params)
        } else {
            options.body = JSON.stringify(params)
        }
    }

    const response = await fetch(apiUrl + endPoint, options)

    if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.')
    }

    const result = await response.json()

    return result;
}

function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&')
}

function generateErrorResponse(message) {
    return {
        status: 'error',
        message
    }
}