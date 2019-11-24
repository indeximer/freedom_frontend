export const isEmptyObject = (obj) => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)){
            if(obj[prop].length === 0){
                return true         
            } else{
                return false
            }
        }
    }
    return false
}

export const resolveObjectPath = (path, obj) => {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null
    }, obj)
}

export const setUserToSessionStorage = (token, econdedLogin) =>{
    let user = token.split('.')
    user = JSON.parse(atob(user[1]))
    const expires = Date.now() + user.expires_in * 1000

    sessionStorage.setItem('api-token', token)
    sessionStorage.setItem('api-token-expires_in', expires)
    sessionStorage.setItem('user-name', user.name)
    sessionStorage.setItem('user-roles', user.roles)
    sessionStorage.setItem('user-email', user.login)
    sessionStorage.setItem('user-image','teste')
}

export const removeDuplicates = (arr, comp) => {
    const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e])

        return unique
}