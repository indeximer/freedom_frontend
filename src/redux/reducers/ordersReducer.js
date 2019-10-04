import {
    GET_ORDER_NUMBER,
    GET_CROSS_MERCHANT_ORDER,
    GET_QUALIFICATION_ORDER,
    GET_CLEAR_ORDER
} from '../actions/actionTypes'

import { isEmptyObject, normalizeTableOrder, formatHeaderTitle } from '../../utils/helpers'

const initialState = {
    merchants:[],
    pagination: {
        currentPage: 0,
        totalPages: 0,
        totalItems: 0,
        size: 15
    }
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CROSS_MERCHANT_ORDER:

        if(!action.payload.merchants.length) return initialState
                
            return {
                    ...state, 
                    merchants: action.payload.merchants
                        .map(item => ({ 
                            ...item, 
                            title: formatHeaderTitle(item), 
                            orders: item.orders.map(order => normalizeTableOrder(order)) 
                        }))  
            }

        case GET_ORDER_NUMBER:

            if(!action.payload.merchants.hasOwnProperty('merchant_id')) return initialState

            return {
                ...state, 
                merchants: [{
                        ...action.payload.merchants,
                        title: formatHeaderTitle(action.payload.merchants), 
                        orders: action.payload.merchants.orders.map(order => normalizeTableOrder(order)) 
                }] 
            }

        case GET_QUALIFICATION_ORDER:
            if(isEmptyObject(action.payload)) return state

            return {
                ...state,
                orders: {
                    ...state.orders,
                    qualifications: action.payload
                } 
            }
        
        case GET_CLEAR_ORDER:
            return initialState
            
        default: 
            return state;
    }

}

export default orderReducer