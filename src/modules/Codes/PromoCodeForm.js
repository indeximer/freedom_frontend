import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

// components
import { TableBuilder } from '../../components/common/table'
import CheckboxField from '../../components/common/form/CheckboxField'
import PromoCodeTr from './PromoCodeTr'
import ContentLoader from '../../components/common/loader/ContentLoader'
import Button from '../../components/common/Button'


const RenderField = ({ input, type, disabled, className, meta: { touched, error } }) => (
    <div>
        <input {...input} type={type} className={className} disabled={disabled} />
        {touched &&
            (error && <span className='error'>{error}</span>)
        }
    </div>
)

let PromoCodeForm = (props) => {

    const { handleSubmit, showingData, formData, showForm, currentPromoCode, isFetching, disabled } = props

    const formFields = {
        promoCode:{
            name:'promo_code',
            type:'text',
            className:'form-control',
            component:'input'
        },
        edit:{
            name:'edit',
            type:'hidden',
            className:'form-control',
            component:'input'
        },
        description:{
            name:'description',
            type:'text',
            className:'form-control'
        }
    }

    return(
        <form className="promo-code-form" onSubmit={(event) => handleSubmit(event, formData.values)}>
            <TableBuilder isFetching={isFetching} tableData={showingData} >
                {showForm &&
                    <tr className='addCode'>
                        <td>
                            <Field {...formFields.edit} />
                            <Field {...formFields.promoCode} component={RenderField} disabled={currentPromoCode.promo_code ? true:false} />
                        </td>
                        <td><Field {...formFields.description} component={RenderField} /></td>
                        <td><strong>{currentPromoCode.situation && currentPromoCode.situation.status === 'deactivaded' ? 'INATIVO': 'ATIVO'}</strong></td>
                        <td><Button classList="btn" icon="fa fa-check" type="submit"></Button></td>
                    </tr>
                }
                
                {showingData.tbody.map((row,index) => (
                    <PromoCodeTr row={row} key={index} disabledRow={disabled} />
                ))}
            </TableBuilder>
        </form>
    )
}

const validate = (values) =>{
    const errors = {}

    if(!values.promo_code){
        errors.promo_code = "O Código Promocional é obrigatório."
    }
    if(!values.description){
        errors.description = "A descição é obrigatória."
    }
    return errors
}


PromoCodeForm = reduxForm({
    form: 'addOPromoCodeForm',
    validate,
    enableReinitialize: true,
    destroyOnUnmount:false,
    keepDirtyOnReinitialize: true
})(PromoCodeForm)

const mapStateToProps = (store) => {
    return {
        formData: store.form.addOPromoCodeForm,
        promoCodes: store.promoCodesStore.promoCodes,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

export default connect(mapStateToProps)(PromoCodeForm)