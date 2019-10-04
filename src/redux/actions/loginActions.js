import {
    LOGIN,
    LOGOUT
} from './actionTypes'

import { handleSave } from './loadingActions'

//api
import * as LoginApi from '../../api/loginApi'

export const login = (payload) => ({
    type: LOGIN,
    payload
})
export const loginAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        LoginApi.post(payload)
        .then((payload) => dispatch(login(payload)))
    ))
)



export const logout = () => ({
    type: LOGOUT
})
