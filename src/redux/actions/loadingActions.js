import {
    START_FETCHING,
    START_SAVING,
    END_FETCHING,
    END_SAVING
} from './actionTypes'

const startFetching = () => (dispatch) => {
    return new Promise((resolve,reject) => {
        dispatch({type: START_FETCHING})
        resolve()
    })
}
const endFetching = (res) => (dispatch) => {
    return new Promise((resolve,reject) => {
        dispatch({type: END_FETCHING})
        resolve(res)
    })
}

const startSaving = () => (dispatch) => {
    return new Promise((resolve,reject) => {
        dispatch({type: START_SAVING})
        resolve()
    })
}
const endSaving = (res) => (dispatch) => {
    return new Promise((resolve,reject) => {
        dispatch({type: END_SAVING})
        resolve(res)
    })
}

export const handleFetch = (dispatch, fetch) => {
    return dispatch(startFetching())
        .then(() => fetch())
        .then((res) => dispatch(endFetching(res)))
        .then((res) => res)
}

export const handleSave = (dispatch, fetch) => {
    return dispatch(startSaving())
        .then(() => fetch())
        .then((res) => dispatch(endSaving(res)))
        .then((res) => res)
}