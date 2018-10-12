import {RECEIVE_TECHNIQUES} from '../actions/actionTypes';

const initialState = {
    techniques:[]
}

const techniquesReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_TECHNIQUES:
            return{
                ...state,
                techniques: action.techniques
            };
        default:
            return state;
    }
}

export default techniquesReducer;