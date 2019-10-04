import imgServico from '../assets/img/servico.png'

export const normalizeOfferingForTable = (offering) => {
    return {
        ...offering,
        id: offering.offering_id,
        user: offering.audit_information.channel_data.name || 'Desconhecido',
        images: offering.items.map(item => item.product.icon_url || imgServico),
        status: (offering.situation && offering.situation.status) || 'Desconhecido'
    }
}

export const normalizeErrorForTable = (object, id, attrs) => {
    const items = attrs.map(item => resolveObjectPath(item,object))
    return {
        ...object,
        checked:false,
        id: id,
        tableCells: items
    }
}

export const isEmptyObject = (obj) => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)){
            if(obj[prop].length === 0){
                return true         
            } else{
                return false
            }
        }
    }
    return false
}

export const formatModalityOrder = (obj) => {
    let modality = []
    
    let items = obj.items.map(i => i.product.product_type === "terminal" && i.product.pricing_model.pricing_type)
    
    if(items.length > 0) modality = items.filter((v, i) => v ? items.indexOf(v) === i : null)

    if(modality.length > 0){
        modality = modality.map(v => {
            if(v === "monthly_rent") return "ALUGUEL"

            if(v === "fixed_price") return "VENDA"
        })
    }

    if(modality.length) modality = modality.filter((e,i) => modality.indexOf(e) === i)

    return modality.length > 1 ? `${modality[0]} + ${modality[1]}` : modality[0]
}

export const maskCpfCnpj = value => {
    value = value.replace(/\D/g,"")
    if(value.length === 11){
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    } else {
        value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");     
    }
    return value
}

export const formatHeaderTitle = obj => ({
    document: obj.merchant_id,
    ec: obj['acquirer_merchant_code'] || '',
    name: obj.merchant_legal_data.person['name'] || obj.merchant_legal_data.person['legal_name'],
    situation: obj.situation.status,
    payload: obj   
})

export const normalizeTableOrder = object => ({
        cells: [
            object.audit_information.creation_date, 
            object.order_number, 
            object.promo_code, 
            formatModalityOrder(object), 
            object.situation.status, 
            object.order_id ],
            ...object,
})

export const normalizeOfferingItem = (offeringItem) => (
    {
        ...offeringItem,
        product: {
            ...offeringItem.product,
            id: offeringItem.product.product_id,
            image: offeringItem.product.icon_url || imgServico
        }
    }
)

export const normalizerSettlementOptions = (filters) => {
    const settlementOptions = filters.filter(filter => filter.name === 'settlement_period')[0]
    if(settlementOptions){
        return settlementOptions.items.map(option => (
            {
                value: option.value,
                text: option.label
            }
        ))
    }
    else{return []}
}

export const resolveObjectPath = (path, obj) => {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null
    }, obj)
}

export const stripTags = (html) => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

export const normalizeMaintenancePayloadForPost = (payload, ackType, newMessage, replyType) => {
    let normalizedPayload =  {
        id: payload.id,
        maintenance_target_event: payload.maintenance_target_event,
        original_message: payload.original_message,
        original_exchange: payload.original_exchange,
        original_tag: payload.original_tag,
        erros: payload.erros,
        status_reprocess: payload.status_reprocess,
        error_date: payload.error_date,
        trace_id: payload.trace_id || '198969599f1e4061',
        new_message: newMessage,
        ack_type: ackType
    }

    if(replyType){
        normalizedPayload.reply_type = replyType
    }

    return normalizedPayload
}

export const normalizeMaintenancePayloadForPut = (payload, newStatusReprocess) => {
    let normalizedPayload =  {
        id: payload.id,
        maintenance_target_event: payload.maintenance_target_event,
        original_message: payload.original_message,
        original_exchange: payload.original_exchange,
        original_tag: payload.original_tag,
        erros: payload.erros,
        status_reprocess: newStatusReprocess,
        error_date: payload.error_date
    }

    return normalizedPayload
}

export const formatDate = date => {
    const d = new Date(date)
    const formatedDate = `${d.getDay()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

    return formatedDate
}

export const buildQueryString = (obj) => {
    var str = ['?']
    // obj.originalMessage ? str.push(`original_message=${obj.originalMessage}`) : false
    // obj.error ? str.push(`error=${obj.error}`) : false
    // obj.traceId ? str.push(`trace_id=${obj.traceId}`) : false
    // obj.statusReprocess ? str.push(`status_reprocess=${obj.statusReprocess}`) : false
    // obj.serviceName ? str.push(`service_name=${obj.serviceName}`) : false
    // obj.originalExchange ? str.push(`original_exchange=${obj.originalExchange}`) : false
    // obj.originalQueue ? str.push(`original_queue=${obj.originalQueue}`) : false

    // if(obj.errorDate){
    //     const initialDate = obj.errorDate[0].toISOString()
    //     const finalDate = obj.errorDate[1].toISOString()
    //     str.push(`initial_date=${initialDate}`)
    //     str.push(`final_date=${finalDate}`)
    // }

    return str.join("&");
}

export const setUserToSessionStorage = (token, econdedLogin) =>{
    let user = token.split('.')
    user = JSON.parse(atob(user[1]))

    const expires = Date.now() + user.expires_in * 1000

    sessionStorage.setItem('api-token', token)
    sessionStorage.setItem('api-token-expires_in', expires)
    sessionStorage.setItem('user-name', user.name)
    sessionStorage.setItem('user-roles', user.roles)
    sessionStorage.setItem('user-email', user.login)
    // sessionStorage.setItem('user-job-description','Plataforma de Riscos')
    sessionStorage.setItem('user-image','teste')
}

export const removeDuplicates = (arr, comp) => {
    const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e])

        return unique
}

export const getEnv = () => {
    const hostname = window.location.hostname
    const apiUrl = process.env.REACT_APP_API_ROOT
    let env
    
    switch(hostname){
        case 'localhost':
            if(apiUrl === 'https://api-hti.getnet.com.br:8443'){
                env = 'local-hti'
            }else if(apiUrl === 'https://api-hg.getnet.com.br:8443'){
                env = 'local-hg'
            }
            break
        case 'onboarding-hg.getnet.com.br':
            env = 'hg'
            break
        case 'onboarding-hti.getnet.com.br':
            env = 'hti'
            break
        case 'onboarding.getnet.com.br':
            env = 'prod'
            break
        default:
            break
    }
    return env    
}

export const getUploadUrl = () =>{
    const env = getEnv()
    let uploadUrl

    switch(env){
        case 'local-hti':
        case 'hti':
            uploadUrl = 'https://ecommerce-hom.getnet.com.br/server/v1/media-storage/'
            break
        case 'local-hg':
        case 'hg':
            uploadUrl = 'https://ecommerce-hg.getnet.com.br/server/v1/media-storage/'
            break
        case 'prod':
            uploadUrl = 'https://credenciamentodigital.getnet.com.br/server/v1/media-storage/'
            break
    }
    return uploadUrl
}

export const asciiToHexa = str => {
    const values = []
    for (let n = 0, l = str.length; n < l; n ++) {
      values.push(Number(str.charCodeAt(n)).toString(16))
    }
    return values.join('')
}
   
export const randomString = (length = 8 ) => {
 let text = ''
 const possible = 'abcdefghijklmnopqrstuvwxyz0123456789'
 for (let i = 0; i < length; i++)
   text += possible.charAt(Math.floor(Math.random() * possible.length))
 return text
}

export const mmutable = oo => {
    let newObj = {}
    newObj = Object.assign({}, oo)
    for(var prop in oo) {
        if(typeof prop === 'string'){
            if(typeof newObj[prop] === 'object'){
               if(!!newObj[prop].length){
                newObj[prop] = newObj[prop].map(v => Object.assign({}, v))
               } 
            }
        }
    }
    return newObj
}