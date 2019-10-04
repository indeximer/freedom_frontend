import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import loginReducer from './loginReducer'
import productsReducer from './productsReducer'
import offeringsReducer from './offeringsReducer'
import promoCodesReducer from './promoCodesReducer'
import maintenanceReducer from './maintenanceReducer'
import modalReducer from './modalReducer'
import loadingReducer from './loadingReducer'
import ordersReducer from './ordersReducer'

export default combineReducers({
    loginStore: loginReducer,
    productsStore: productsReducer,
    offeringsStore: offeringsReducer,
    promoCodesStore: promoCodesReducer,
    maintenanceStore: maintenanceReducer,
    modalStore: modalReducer,
    loadingStore: loadingReducer,
    form: formReducer,
    ordersStore: ordersReducer
})