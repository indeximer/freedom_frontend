import {
    RECEIVE_PRODUCTS,
    CREATE_PRODUCT
} from '../actions/actionTypes'

import imgServico from '../../assets/img/servico.png'

const initialState = {
    products:[]
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return{
                ...state,
                products: action.payload.map((product) =>{
                        return {
                            ...product,
                            id: product.product_id,
                            image: product.icon_url || (product.image_urls && product.image_urls[0]) || imgServico,
                            name:product.name,
                            user: 'Jhon Doe',
                            status: (product.situation && product.situation.status) || 'Desconhecido'
                        }
                    })
            };
        case CREATE_PRODUCT:
            const product = action.payload;
            return{
                ...state,
                products: state.products.concat({
                    id: product.product_id,
                    image: product.icon_url || (product.image_urls && product.image_urls[0]) || imgServico,
                    name:product.name,
                    user: 'Jhon Doe',
                    status: product.situation.status || 'Desconhecido'
                })
            }
        default:
            return state;
    }
}

export default productsReducer;