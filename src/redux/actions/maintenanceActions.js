import {
    RECEIVE_ERRORS,
    GET_ERROR,
    CLEAR_CURRENT_ERROR,
    UPDATE_ERROR_STATUS,
    SET_SELECTED_ITEM,
    REMOVE_SELECTED_ITEM,
    SELECT_ALL,
    UNSELECT_ALL
} from './actionTypes'

import { handleFetch, handleSave } from './loadingActions'

//api
import * as MaintenanceApi from '../../api/maintenanceApi'

export const getErrors = (payload) => ({
    type: RECEIVE_ERRORS,
    payload
})
export const getErrorsAsync = (page,size,params) => (dispatch) =>(
    handleFetch(dispatch, () => (
        MaintenanceApi.getAll(page,size,params)
        .then((payload) => dispatch(getErrors(payload)))
    ))
)

export const getErrorById = (payload) => ({
    type: GET_ERROR,
    payload
})
export const getErrorByIdAsync = (id) => (dispatch) =>(
    handleFetch(dispatch, () => (
        MaintenanceApi.getById(id)
        .then((payload) => dispatch(getErrorById(payload)))
    ))
)

export const postReply = (payload) => ({
    type: UPDATE_ERROR_STATUS,
    payload
})
export const postReplyAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        MaintenanceApi.postReply(payload)
        .then((payload) => dispatch(postReply(payload)))
    ))
)

export const postMassReply = (payload) => ({
    type: UPDATE_ERROR_STATUS,
    payload
})
export const postMassReplyAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        MaintenanceApi.postMassReply(payload)
        .then((payload) => dispatch(postMassReply(payload)))
    ))
)

export const putDiscard = (payload) => ({
    type: UPDATE_ERROR_STATUS,
    payload
})
export const putDiscardAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        MaintenanceApi.putDiscard(payload)
        .then((payload) => dispatch(putDiscard(payload)))
    ))
)


export const clearCurrentError = () => ({
    type: CLEAR_CURRENT_ERROR
})

export const setSelectedItem = (payload) => ({
    type: SET_SELECTED_ITEM,
    payload
})

export const removeSelectedItem = (payload) => ({
    type: REMOVE_SELECTED_ITEM,
    payload
})

export const selectAll = () => ({
    type: SELECT_ALL
})

export const unselectAll = () => ({
    type: UNSELECT_ALL
})