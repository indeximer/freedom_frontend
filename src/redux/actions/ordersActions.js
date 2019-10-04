// types
import {
    GET_ORDERS,
    GET_ORDER_NUMBER,
    GET_MERCHANTS_DOCUMENT,
    GET_CROSS_MERCHANT_ORDER,
    GET_QUALIFICATION_ORDER,
    GET_CLEAR_ORDER
} from './actionTypes'

// actions
import { handleFetch } from './loadingActions'

// api
import * as OrderApi from '../../api/orderApi'

export const getClearOrder = payload => ({
    type: GET_CLEAR_ORDER,
    payload
})

export const getClearOrderAsync = () => (dispatch) =>(
    handleFetch(dispatch, () => (
        dispatch(getClearOrder([]))))
)


export const getMerchantsDocument = (payload) => ({
    type: GET_MERCHANTS_DOCUMENT,
    payload
})
export const getMerchantsDocumentAsync = (params) => (dispatch) =>(
    handleFetch(dispatch, () => (
        OrderApi.getMerchantByDocument(params)
        .then((payload) => dispatch(getMerchantsDocument(payload)))
    ))
)

export const getCrossMerchantOrder = (payload) => ({
    type: GET_CROSS_MERCHANT_ORDER,
    payload
})
export const getCrossMerchantOrderAsync = (params) => (dispatch) => ( 
    handleFetch(dispatch, async () => {
        try {

            let merchantIDs = []
               ,orderIDs = []
               ,payload = {}
               ,status = []


            payload.merchants = await Promise.resolve(OrderApi.getMerchantByDocument(params))
                .then(merchants => merchants)

            if(payload.merchants.length) {
                merchantIDs = payload.merchants.map(({ merchant_id }) => merchant_id)
                
                await merchantIDs.reduce(async (promise, id, i) => {
                    
                    payload.merchants[i].status = {
                        adapters:{
                            gerencial: await promise.then( _ => OrderApi.getAdapterGerencialByMerchantId(id))
                        },
                        fullfilments:{
                            //sap: await promise.then( _ => OrderApi.getAdapterSapByMerchantId(id)),
                            internal: await promise.then( _ => OrderApi.getFullfilmentsInternalByMerchantId(id)),
                            siebel: await promise.then( _ => OrderApi.getAdapterSiebelByMerchantId(id))
                        }
                    }

                    payload.merchants[i].qualifications = await promise.then( _ => OrderApi.getQualificationByMerchantId(id))
                    payload.merchants[i].orders = await promise.then( _ => OrderApi.getOrdersByMerchantId(id))
                    
                    if(!!payload.merchants[i].orders.length){
                        orderIDs = payload.merchants[i].orders.filter((order) => order.situation.status !== 'created')
                        console.log(orderIDs)
                        await orderIDs.reduce(async ($p, order, j) => {
                            status.push({
                                order_id: order.order_id,
                                qualification: await $p.then( _ => OrderApi.getQualificationByOrderId(order.order_id)),
                                adapters: {
                                    sap: await $p.then( _ => OrderApi.getAdapterSapByOrderNumber(order.order_number)),
                                    siebel: await  $p.then( _ => OrderApi.getAdapterSiebelByOrderNumberId(order.order_number)),
                                },
                                fullfilments: {
                                    rent: await $p.then( _ => OrderApi.getFullfilmentsRentByOrderId(order.order_id)),
                                    sale: await $p.then( _ => OrderApi.getFullfilmentsSaleByOrderId(order.order_id))  
                                }
                            })
                            console.log(status)
                        }, Promise.resolve())
                        payload.merchants[i].orders = orderIDs.map(obj => ({ status: status.filter(prop => prop.order_id === obj.order_id), ...obj }))   
                    }
                }, Promise.resolve())
            }
            console.log(payload.merchants)
            dispatch(getCrossMerchantOrder(payload))
        } catch (e) {
            throw e.message
        }
    }
))

export const getOrderNumber = (payload) => ({
    type: GET_ORDER_NUMBER,
    payload
})
export const getOrdersNumberAsync = (params) => (dispatch) =>(
    handleFetch(dispatch, async () => {
        let  qualifications = []
            ,merchants = []    
            ,orderIDs = []
            ,itemsIDs = []
            ,payload = {}
            ,status=[]

        try {

            let orders = await Promise.resolve(OrderApi.getOrderByOrderNumber(params))
                .then(payload => payload)

            if(orders.length) {
                itemsIDs = orders.map(({ merchant: { merchant_id } }) => merchant_id)

                /** Merchants */
                await itemsIDs.reduce(async ($promise, id, i) => { 
                    merchants = await $promise.then( _ => OrderApi.getMerchantByMerchantId(id))
                    merchants.status = {
                        adapters:{
                            gerencial: await $promise.then( _ => OrderApi.getAdapterGerencialByMerchantId(id))
                        },
                        fullfilments:{
                            //sap: await promise.then( _ => OrderApi.getAdapterSapByMerchantId(id)),
                            internal: await $promise.then( _ => OrderApi.getFullfilmentsInternalByMerchantId(id)),
                            siebel: await $promise.then( _ => OrderApi.getAdapterSiebelByMerchantId(id))
                        }
                    }        
                    qualifications = await $promise.then( _ => OrderApi.getQualificationByMerchantId(id))
                }, Promise.resolve())

                /** Status */
                orderIDs = orders.filter((order) => order.situation.status !== 'created')
                if(orderIDs.length)
                await orderIDs.reduce(async ($p, order, j) => {
                    status.push({
                        order_id: order.order_id,
                        //qualification: await $p.then( _ => OrderApi.getQualificationByOrderId(order.order_id)),
                        adapters: {
                            sap: await $p.then( _ => OrderApi.getAdapterSapByOrderNumber(order.order_number)),
                            siebel: await  $p.then( _ => OrderApi.getAdapterSiebelByOrderNumberId(order.order_number)),
                        },
                        fullfilments: {
                            rent: await $p.then( _ => OrderApi.getFullfilmentsRentByOrderId(order.order_id)),
                            sale: await $p.then( _ => OrderApi.getFullfilmentsSaleByOrderId(order.order_id))  
                        }
                    })
                    console.log(status)
                }, Promise.resolve())
                orders = orderIDs.map(obj => ({ status: status.filter(prop => prop.order_id === obj.order_id), ...obj }))   
            }
            
            payload.merchants = {
                ...merchants,
                orders,
                qualifications
            }
            
            dispatch(getOrderNumber(payload))
        } catch (e) {
            throw e.message
        }
        
    })
)

export const getOrderByMerchantId = (payload) => ({
    type: GET_ORDERS,
    payload
})
export const getOrdersByMerchantIdAsync = (params) => (dispatch) => (
    handleFetch(dispatch, () => (
        OrderApi.getOrdersByMerchantId(params)
        .then((payload) => dispatch(getOrderByMerchantId(payload)))
    ))
)


export const getQualificationByOrderId = (payload) => ({
    type: GET_QUALIFICATION_ORDER,
    payload
})
export const getQualificationByOrderIdAsync = (params) => (dispatch) => (
    handleFetch(dispatch, () => (
        OrderApi.getQualificationByOrderId(params)
            .then(payload => dispatch(getQualificationByOrderId(payload)))
    ))
)


