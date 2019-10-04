import {
    START_FETCHING,
    START_SAVING,
    END_FETCHING,
    END_SAVING
} from '../actions/actionTypes'

const initialState = {
    isFetching: false,
    isSaving: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case END_FETCHING:
            return {
                ...state,
                isFetching: false
            }
        case START_SAVING:
            return {
                ...state,
                isSaving: true
            }
        case END_SAVING:
            return {
                ...state,
                isSaving: false
            }
        default:
            return state
    }
}

export default loginReducer;