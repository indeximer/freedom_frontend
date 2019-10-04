import {
    RECEIVE_OFFERINGS,
    GET_OFFERING,
    RECEIVE_FILTERS,
    CREATE_OFFERING,
    UPDATE_OFFERING_STATUS,
    EDIT_OFFERING,
    EDIT_OFFERING_FILTERS,
    CLEAR_CURRENT_OFFERING
} from './actionTypes'

import { handleFetch, handleSave } from './loadingActions'

//api
import * as OfferingsApi from '../../api/offeringsApi'

export const getOfferings = (payload) => ({
    type: RECEIVE_OFFERINGS,
    payload
})
export const getOfferingsAsync = () => (dispatch) =>{
    handleFetch(dispatch, () => (
        OfferingsApi.getAll()
        .then((payload) => dispatch(getOfferings(payload)))
    ))
}

export const getOfferingById = (payload) => ({
    type: GET_OFFERING,
    payload
})
export const getOfferingByIdAsync = (id) => (dispatch) =>(
    handleFetch(dispatch, () => (
        OfferingsApi.getById(id)
        .then((payload) => dispatch(getOfferingById(payload)))
    ))
)

export const getFilters = (payload) => ({
    type: RECEIVE_FILTERS,
    payload
})
export const getFiltersAsync = () => (dispatch) =>(
    handleFetch(dispatch, () => (
        OfferingsApi.getFilters()
        .then((payload) => dispatch(getFilters(payload)))
    ))
)

export const addOfferings = (payload) => ({
    type: CREATE_OFFERING,
    payload
})
export const addOfferingstAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        OfferingsApi.add(payload)
        .then((payload) => dispatch(addOfferings(payload)))
    ))
)

export const updateOfferingStatus = (payload) => ({
    type: UPDATE_OFFERING_STATUS,
    payload
})
export const updateOfferingStatusAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        OfferingsApi.updateStatus(payload)
        .then((payload) => dispatch(updateOfferingStatus(payload)))
    ))
)

export const editOffering = (payload) => ({
    type: EDIT_OFFERING,
    payload
})
export const editOfferingAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        OfferingsApi.edit(payload)
        .then((payload) => dispatch(editOffering(payload)))
    ))
)

export const editOfferingFilters = (payload) => ({
    type: EDIT_OFFERING_FILTERS,
    payload
})
export const editOfferingFiltersAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        OfferingsApi.editFilters(payload)
        .then((payload) => dispatch(editOfferingFilters(payload)))
    ))
    
)

export const clearCurrentOffering = () => ({
    type: CLEAR_CURRENT_OFFERING
})