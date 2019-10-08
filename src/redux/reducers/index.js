import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import loginReducer from './loginReducer'
import offeringsReducer from './offeringsReducer'
import techniquesReducer from './techniquesReducer'
import modalReducer from './modalReducer'
import loadingReducer from './loadingReducer'

export default combineReducers({
    loginStore: loginReducer,
    offeringsStore: offeringsReducer,
    techniquesStore: techniquesReducer,
    modalStore: modalReducer,
    loadingStore: loadingReducer,
    form: formReducer
})