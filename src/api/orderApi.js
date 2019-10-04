import { apiUrl, apiVersion, createHeaders } from './apiConstants'


const apiOrder = '/internal/orders'
const apiInternal = '/internal'
const apiMerchant = '/internal/merchants'
const apiQualification = '/qualifications'

/** Begin Orders */
/**
 * @method GET
 * @param {int} page  
 * @param {int} size 
 * @param {string} merchant_id
 */
export const getOrdersByMerchantId = (merchant_id, page = 0, size = 15) => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiOrder}?merchant_id=${merchant_id}&dir=DESC`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @description getOrderByOrderNumber 
 * @method GET
 * @param {string} order_number 
 */
export const getOrderByOrderNumber = order_number => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiOrder}?order_number=${order_number}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/** End Orders */


/** Begin Merchants */
/**
 * @method GET
 * @param {string} legal_document_number 
 */
export const getMerchantByDocument = legal_document_number => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiMerchant}?legal_document_number=${legal_document_number}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} merchant_id 
 */
export const getMerchantByMerchantId = merchant_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiMerchant}/${merchant_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/** End Merchants */


/** Begin Qualifications */
/**
 * @method GET
 * @param {string} merchant_id 
 */
export const getQualificationByMerchantId = merchant_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiMerchant}/${merchant_id}/qualification`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} order_id 
 */
export const getQualificationByOrderId = order_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiQualification}?order_id${order_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/** End Qualifications */


/** Begin Fullfilments */
/**
 * @method GET
 * @param {string} order_id 
 */
export const getFullfilmentsSaleByOrderId = order_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/fulfillments-sale?order_id=${order_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} order_id 
 */
export const getFullfilmentsRentByOrderId = order_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/fulfillments-rent?order_id=${order_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} order_id 
 */
export const getFullfilmentsInternalByOrderId = order_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/fulfillments-internal?order_id=${order_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} merchant_id 
 */
export const getFullfilmentsInternalByMerchantId = merchant_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/fulfillments-internal?merchant_id=${merchant_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/** End Fullfilments */


/** Begin Adapters */
/**
 * @method GET
 * @param {string} merchant_id 
 */
export const getAdapterGerencialByMerchantId = merchant_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/adapter-gerencial/merchant/precadastro?merchant_id=${merchant_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))

        })
} 
/**
 * @method GET
 * @param {string} order_number 
 */
export const getAdapterSapByOrderNumber = order_number => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/adapter-sap/order?order_number=${order_number}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} order_number 
 */
export const getAdapterSapByMerchantId = merchant_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/adapter-sap/account?merchant_id=${merchant_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}

/**
 * @method GET
 * @param {string} merchant_id 
 */
export const getAdapterSiebelByMerchantId = merchant_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/adapter-siebel/account?merchant_id=${merchant_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/**
 * @method GET
 * @param {string} order_id 
 */
export const getAdapterSiebelByOrderNumberId = order_id => {
    return createHeaders()
        .then((headers) => {
            return fetch(`${apiUrl}${apiVersion}${apiInternal}/adapter-siebel/service-request?order_number=${order_id}`,{'headers':headers})
                .then(response => response.json())
                .then(data => data)
                .catch(error => ({ error: error, message: error.message || 'Error Fetch API' }))
        })
}
/** End Adapters */


