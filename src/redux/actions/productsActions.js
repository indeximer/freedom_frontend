import {
    RECEIVE_PRODUCTS,
    CREATE_PRODUCT
} from './actionTypes'

import { handleFetch } from './loadingActions'

//api
import * as ProductsApi from '../../api/productsApi'

export const getProducts = (payload) => ({
    type: RECEIVE_PRODUCTS,
    payload
})
export const getProductsAsync = () => (dispatch) =>(
    handleFetch(dispatch, () => (
        ProductsApi.getPropducts()
        .then((payload) => dispatch(getProducts(payload)))
    ))
)

export const addProduct = (payload) => ({
    type: CREATE_PRODUCT,
    payload
})

export const addProductAsync = () => (dispatch) =>(
    ProductsApi.addPropduct()
        .then((payload) => dispatch(addProduct(payload)))
)