import {
    RECEIVE_OFFERINGS,
    GET_OFFERING,
    RECEIVE_FILTERS,
    CREATE_OFFERING,
    UPDATE_OFFERING_STATUS,
    EDIT_OFFERING,
    EDIT_OFFERING_FILTERS,
    CLEAR_CURRENT_OFFERING
} from '../actions/actionTypes'

import { normalizeOfferingForTable } from '../../utils/helpers'

const initialState = {
    offerings:[],
    currentOffering:{items:[],filters:[]},
    filters:[]
}
let newOfferings = []

const offeringsReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_OFFERINGS:
            const activeOfferings = action.payload.filter(offering => offering.situation && offering.situation.status !== 'deactivated')
            return{
                ...state,
                offerings: activeOfferings.map((offering) => normalizeOfferingForTable(offering))
            }
        case GET_OFFERING:
            return{
                ...state,
                currentOffering: action.payload
            }
        case CLEAR_CURRENT_OFFERING:
            return {
                ...state,
                currentOffering: {items:[],filters:[]}
            }
        case RECEIVE_FILTERS:
            let filters  = action.payload.filter(filter => filter.situation.status === 'active')
                .filter(filter => filter.questions_suggested.length > 0)
                .filter(filter => (filter.filter_type === 'one_of_list' && filter.value_domain.length > 0) || filter.filter_type === 'boolean')

            filters = filters.map(filter => (
                {
                    label:filter.questions_suggested[0].question_suggested,
                    name:filter.filter_name,
                    type:filter.filter_type,
                    value:true,
                    placeholder:'',
                    items: filter.value_domain && filter.value_domain[0].values.map(item => (
                        {
                            label:item.description,
                            name:filter.filter_name,
                            type:'checkbox',
                            placeholder:'',
                            value:item.code,
                            options:null
                        }
                    ))
                }
            ))

            return{
                ...state,
                filters: filters
            }
        case CREATE_OFFERING:
            return{
                ...state,
                offeringResponse: action.payload
            }
        case UPDATE_OFFERING_STATUS:
            let editedOffering = state.offerings.filter(offering => offering.offering_id === action.payload.offering_id)[0]
            if(editedOffering){
                editedOffering.situation.status = action.payload.situation.status
            }

            newOfferings = state.offerings.filter(offering => offering.offering_id !== action.payload.offering_id)
            newOfferings.push(editedOffering)

            newOfferings = state.offerings.filter(offering => offering.situation && offering.situation.status !== 'deactivated')

            newOfferings = newOfferings.map((offering) => normalizeOfferingForTable(offering))

            return {
                ...state,
                offerings: newOfferings
            }
            
        case EDIT_OFFERING:
        case EDIT_OFFERING_FILTERS:
        default:
            return state;
    }
}

export default offeringsReducer;