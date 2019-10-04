import { HANDLE_MODAL } from '../actions/actionTypes'

const initialState = {
    showModal: false,
    modal:{}
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
                modal: action.payload
            }
        default:
            return state
    }
}

export default loginReducer;