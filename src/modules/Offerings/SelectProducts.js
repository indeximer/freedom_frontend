import React, {Component} from 'react'
import sortBy from 'sort-by'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//components
import FadeComponents from '../../components/common/FadeComponents'
import Button from '../../components/common/Button'
import { SelectField, CheckboxField } from '../../components/common/form'
import Popup from '../../components/common/Popup'
import ProductsList from './ProductsList'

//utils
import { normalizeOfferingItem, normalizerSettlementOptions } from '../../utils/helpers'

class SelectProducts extends Component{
    state= {
        showModal:false,
        currentProduct:null
    }

    notifyAdd = () => toast.success("Produto adicionado!")

    notifyRemove = () => toast.error('Produto removido!')

    addProduct = (product, input, event, currentProduct = false) => {
        let newValue = input.value

        const currentSequence = currentProduct.item_sequence_number || false
        const valueSequence = newValue.length > 0 ? newValue[newValue.length - 1].item_sequence_number : 0

        const item = {
            product:{...product},
            quantity:1,
            item_sequence_number: currentSequence || valueSequence + 1
        }

        if(event.target.checked){
            newValue = newValue.filter(value => value.product.product_id !== item.product.product_id)
            newValue.push(item)
            this.notifyAdd()
        }else{
            newValue = input.value.filter(value => value.product.product_id !== item.product.product_id)
            this.notifyRemove()
        }
        return newValue.sort(sortBy('item_sequence_number'))
    }

    handleChangeProduct = (newProduct, currentProduct, input, event) =>{
        let newValue =[]
        if(currentProduct){
            newValue = this.addProduct(newProduct, input, event, currentProduct)
            newValue = newValue.filter(value => value.product.product_id !== currentProduct.product.product_id)
            this.handleModal()
        }else{
            newValue = this.addProduct(newProduct, input, event)
        }

        return input.onChange([...newValue])
    }

    handleModal = (currentProduct = null) => {
        const newState = this.state
        newState.showModal = !newState.showModal
        newState.currentProduct = currentProduct
        this.setState(newState)
    }

    removeProduct = (item, input) => {
        let newValue = input.value.filter(value => value.product.product_id !== item.product.product_id)
        return input.onChange(newValue)
    }

    handleChangeItemAtribute = (atribute, value, product, input) => {
        let newValue = input.value.filter(item => item.product.product_id !== product.product.id)
        product = {
            ...product,
            [atribute]:value
        }
        newValue.push(product)
        newValue.sort(sortBy('item_sequence_number'))
        return input.onChange(newValue)
    }

    render(){
        const { showModal } = this.state
        const { input, filters, disabled, meta: { touched, error } } = this.props

        const offeringProducts = input.value

        const quantityOptions = [
            {value:1,text:1},
            {value:2,text:2},
            {value:3,text:3},
            {value:4,text:4},
            {value:5,text:5}
        ]

        const settlementOptions = normalizerSettlementOptions(filters)

        return(
            <div className="select-products-wrapper d-flex mb-2 mt-2">
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover={false}
                />

                <ul className="select-products d-flex">
                    <FadeComponents>
                        {offeringProducts.map((offeringItem, index) => {

                            const item = normalizeOfferingItem(offeringItem)
                            const compositeType = item.product.product_type === 'composite' ? item.product.composite_type : false
                            
                            return (                            
                                <li key={index}>
                                    <img src={item.product.image} alt={item.product.name} />
                                    <p>{item.product.name}</p>

                                    {(!compositeType || compositeType !== 'acquirer') &&
                                        <div className="mb-4">
                                            <CheckboxField 
                                                disabled={disabled}
                                                checked={offeringItem.optional ? true : false}
                                                id={`${item.product.product_id}${item.product.name}`}
                                                handleChange={(event) => this.handleChangeItemAtribute('optional', event.target.checked, item, input)}
                                                label='Opcional' />
                                        </div>
                                    }
                                    {compositeType && compositeType === 'acquirer' && 
                                        <div className="mb-4">
                                            {  
                                                item.settlement_period 
                                                ? false 
                                                : this.handleChangeItemAtribute('settlement_period', settlementOptions[0].value, item, input)
                                            }
                                            <SelectField
                                                classList='mb-3'
                                                name='settlement_period'
                                                label={item.settlement_period ? settlementOptions.filter(option => option.value === item.settlement_period)[0].text : false}
                                                disabled={disabled}
                                                options={settlementOptions}
                                                callBack={(event) => this.handleChangeItemAtribute('settlement_period', event.target.value, item, input)} />
                                        </div>
                                    }
                                    <Button classList="btn-red sm" disabled={disabled} onClick={() => this.handleModal(item)}>Modificar Item</Button>
                                    <SelectField
                                        classList='select-quantity'
                                        name={item.item_sequence_number}
                                        label={item.quantity || false}
                                        disabled={disabled}
                                        options={quantityOptions}
                                        callBack={(event) => this.handleChangeItemAtribute('quantity', event.target.value, item, input)} />
                                    <button type='button' className="remove" disabled={disabled} onClick={() => this.removeProduct(item, input)}><i className="fa fa-trash-alt"></i></button>
                                </li>
                            )
                        })}
                    </FadeComponents>
                </ul>
                <button type="button" disabled={disabled} className="btn-round" onClick={() => this.handleModal()}>+</button>
                {touched &&
                    (error && <span className='error'>{error}</span>)
                }

                <Popup handleModal={this.handleModal} show={showModal}>
                    <ProductsList
                        handleChangeProduct={this.handleChangeProduct}
                        currentProduct={this.state.currentProduct}
                        handleModal={this.handleModal}
                        input={input}
                        />
                </Popup>
            </div>
        )
    }
}

export default SelectProducts