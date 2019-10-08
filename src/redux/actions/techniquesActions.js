import {
    RECEIVE_TECHNIQUES,
    GET_TECHNIQUE,
    CREATE_TECHNIQUE,
    EDIT_TECHNIQUE,
    DELETE_TECHNIQUE
} from './actionTypes'

import { handleFetch, handleSave } from './loadingActions'

//api
import * as TechniqueApi from '../../api/techniquesApi'

export const getTechniques = (payload) => ({
    type: RECEIVE_TECHNIQUES,
    payload
})
export const getTechniquesAsync = () => (dispatch) =>{
    handleFetch(dispatch, () => (
        TechniqueApi.getAll()
        .then((payload) => dispatch(getTechniques(payload)))
    ))
}

export const getTechniqueById = (payload) => ({
    type: GET_TECHNIQUE,
    payload
})
export const getTechniqueByIdAsync = (id) => (dispatch) =>(
    handleFetch(dispatch, () => (
        TechniqueApi.getById(id)
        .then((payload) => dispatch(getTechniqueById(payload)))
    ))
)