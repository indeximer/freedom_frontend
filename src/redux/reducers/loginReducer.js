import {
    LOGIN,
    LOGOUT
} from '../actions/actionTypes'

const initialState = {
    userToken:null,
    tokenExpires:null,
    user:{},
    loginError:false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
        const token  = action.payload.access_token
            if(action.payload.status_code){
                return{
                    ...state,
                    loginError:true
                }
            }else{
                let user = token.split('.')
                user = atob(user[1])
                return {
                    ...state,
                    userToken: token,
                    tokenExpires: action.payload.expires_in,
                    user: user,
                    loginError: false
                }
            }
        case LOGOUT:
            sessionStorage.removeItem('api-token')
            sessionStorage.removeItem('api-token-expires_in')
            return {
                ...state,
                userToken:null,
                tokenExpires:null
            }
        default:
            return state
    }
}

export default loginReducer;