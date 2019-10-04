import {
    RECEIVE_ERRORS,
    GET_ERROR,
    CLEAR_CURRENT_ERROR,
    SET_SELECTED_ITEM,
    REMOVE_SELECTED_ITEM,
    SELECT_ALL,
    UNSELECT_ALL
} from '../actions/actionTypes'

import { normalizeErrorForTable } from '../../utils/helpers'

const initialState = {
    errors: [],
    selectedItems: [],
    currentError: {},
    pagination: {
        currentPage: 0,
        totalPages: 0,
        totalItems: 0,
        size: 15
    },
    disableBtn: true
}
let newErrors = []
let newSelectedItems = []

const handleCheckError = (newErrors, payload) => (
    newErrors = newErrors.map(item => {
        if(item.id === payload.id){
            return{
                ...item,
                checked:!payload.checked
            }
        }
        return item
    })
)

const handleDisableBtn = (selectedItems) => selectedItems.length > 0 ? false : true

const maintenanceReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_ERRORS:
            const errors = action.payload.data
            return{
                ...state,
                errors: errors.map((error) => normalizeErrorForTable(error, error.id, ['error_date', 'service_name', 'status_reprocess', 'trace_id', 'original_queue', 'erros'])),
                pagination:{
                    currentPage: action.payload.number,
                    totalPages: action.payload.total_pages,
                    totalItems: action.payload.total_elements,
                    size: action.payload.size,
                }
            }
        case GET_ERROR:
            return{
                ...state,
                currentError: action.payload
            }
        case CLEAR_CURRENT_ERROR:
            return {
                ...state,
                currentError: {items:[],filters:[]}
            }
        case SET_SELECTED_ITEM:
            let item = {
                id: action.payload.id
            }
            newSelectedItems = [ ...state.selectedItems ]
            newSelectedItems.push(item)

            newErrors = [ ...state.errors ]
            newErrors = handleCheckError(newErrors, action.payload)
            
            return {
                ...state,
                errors: newErrors,
                selectedItems: newSelectedItems,
                disableBtn: handleDisableBtn(newSelectedItems)
            }
        case REMOVE_SELECTED_ITEM:
            newSelectedItems = [ ...state.selectedItems ]
            newSelectedItems = newSelectedItems.filter(item => item.id !== action.payload.id)

            newErrors = [ ...state.errors ]
            newErrors = handleCheckError(newErrors, action.payload)

            return {
                ...state,
                errors: newErrors,
                selectedItems: newSelectedItems,
                disableBtn: handleDisableBtn(newSelectedItems)
            }
        case SELECT_ALL:
            newSelectedItems = []
            newSelectedItems = state.errors.map(item => ({id: item.id}))

            newErrors = state.errors.map(item => (
                {
                    ...item,
                    checked: true,
                }
            ))
            return{
                ...state,
                errors: newErrors,
                selectedItems: newSelectedItems,
                disableBtn:false
            }
        case UNSELECT_ALL:
            newErrors = [ ...state.errors]
            newErrors = newErrors.map(item => (
                {
                    ...item,
                    checked: false,
                }
            ))
            return{
                ...state,
                errors: newErrors,
                selectedItems: [],
                disableBtn:true
            }
        default:
            return state;
    }
}

export default maintenanceReducer;