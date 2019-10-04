import {
    RECEIVE_PROMO_CODES,
    CREATE_PROMO_CODE,
    UPLOAD_PROMO_CODES,
    UPDATE_PROMO_CODE_STATUS,
    EDIT_PROMO_CODE
} from './actionTypes'

import { handleFetch, handleSave } from './loadingActions'

//api
import * as PromoCodeApi from '../../api/promoCodeApi'

export const getPromoCodes = (payload) => ({
    type: RECEIVE_PROMO_CODES,
    payload
})
export const getPromoCodesAsync = () => (dispatch) =>(
    handleFetch(dispatch, () => (
        PromoCodeApi.getAll()
        .then((payload) => dispatch(getPromoCodes(payload)))
    ))
)

export const searchPromoCodes = (payload) => ({
    type: RECEIVE_PROMO_CODES,
    payload
})
export const searchPromoCodesAsync = (param) => (dispatch) =>(
    handleFetch(dispatch, () => (
        PromoCodeApi.search(param)
        .then((payload) => dispatch(searchPromoCodes(payload)))
    ))
)

export const addPromoCode = (payload) => ({
    type: CREATE_PROMO_CODE,
    payload
})
export const addPromoCodeAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        PromoCodeApi.add(payload)
        .then((payload) => dispatch(addPromoCode(payload)))
    ))
)

export const uploadPromoCodes = (payload) => ({
    type: UPLOAD_PROMO_CODES,
    payload
})
export const uploadPromoCodesAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        PromoCodeApi.uploadCSV(payload)
        .then((payload) => dispatch(uploadPromoCodes(payload)))
    ))
)

export const updatePromoCodeStatus = (payload) => ({
    type: UPDATE_PROMO_CODE_STATUS,
    payload
})
export const updatePromoCodeStatusAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        PromoCodeApi.updateStatus(payload)
        .then((payload) => dispatch(updatePromoCodeStatus(payload)))
    ))
)

export const editPromoCode = (payload) => ({
    type: EDIT_PROMO_CODE,
    payload
})
export const editPromoCodeAsync = (payload) => (dispatch) =>(
    handleSave(dispatch, () => (
        PromoCodeApi.edit(payload)
        .then((payload) => dispatch(editPromoCode(payload)))
    ))
)