import {
    RECEIVE_PROMO_CODES,
    CREATE_PROMO_CODE,
    UPDATE_PROMO_CODE_STATUS,
    EDIT_PROMO_CODE
} from '../actions/actionTypes'

const initialState = {
    promoCodes:[]
}

const promoCodesReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_PROMO_CODES:
            return{
                ...state,
                promoCodes: action.payload
            }
        case UPDATE_PROMO_CODE_STATUS:
        case EDIT_PROMO_CODE:
        case CREATE_PROMO_CODE:
        default:
            return state;
    }
}

export default promoCodesReducer;