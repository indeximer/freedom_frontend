import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Helpers
import { getUploadUrl } from '../../utils/helpers'

//API
import * as mediaApi from '../../api/mediaApi'

//actions
import { getOfferingByIdAsync, getFiltersAsync, clearCurrentOffering } from '../../redux/actions/offeringsActions'
import { handleModal } from '../../redux/actions/modalActions'

//components
import SubHeader from '../../components/common/headers/SubHeader'
import Button from '../../components/common/Button'
import {InlineField, RitchTextEditor, UploadImage} from '../../components/common/form'
//import ImageSelector from '../../components/common/ImageSelector'
//import Tabs from '../../components/common/Tabs'
import SelectProducts from './SelectProducts'
import Filters from './Filters'
import ContentLoader from '../../components/common/loader/ContentLoader'
import ModalLoader from '../../components/common/loader/ModalLoader'
import ResponseModal from '../../components/common/Popup/ResponseModal'

class AddOfferingForm extends Component{

    static propTypes ={
        handleSubmit: PropTypes.func.isRequired
    }

    componentDidMount(){
        const offeringId = this.props.offeringId
        this.props.dispatch(getFiltersAsync())
        if(offeringId){
            this.props.dispatch(getOfferingByIdAsync(offeringId))
        }else{
            this.props.dispatch(clearCurrentOffering())
        }
    }

    handleImageUpload = (file, name, input) => {
        const base64Img = btoa(file)
        const payload = {
            name: name,
            content: base64Img
        }
        
        mediaApi.add(payload)
            .then(res => {
                console.log('teste de up')
                console.log(res.id)
                if(res.id){
                    let uplaodUrl = `${getUploadUrl()}${res.id}`
                    input.onChange(uplaodUrl)
                }                
            })
            .catch(error =>{
                console.log(error)
                input.onChange('')
                const modal = {
                    success: false,
                    type: 'response',
                    handleModal: () => this.props.dispatch(handleModal({})),
                    message:'Ocorreu um erro no upload. Tente novamente mais tarde'
                }
                this.props.dispatch(handleModal(modal))
            })
    }

    render(){
        const uploadUrl = getUploadUrl()
        const { formData, handleSubmit, filters, isFetching, isSaving, initialValues } = this.props
        const status = initialValues.situation && initialValues.situation.status
        const disabled = status && status !== 'created' ? true : false
        
        const formFields = {
            nome:{
                label:'Nome',
                maxLength: '45',
                name:'name',
                type:'text',
                placeholder:'',
                options:null,
                disabled:disabled
            },
            tipo:{
                label:'Tipo de ofeta',
                name:'offering_type',
                type:'select',
                placeholder:'',
                options:[{value:null,text:"Selecione"},{value:"default",text:"Normal"}, {value:"promotion",text:"Promoção"}],
                disabled:disabled
            },
            image:{
                name:'image_url',
                onUpload: this.handleImageUpload,
                disabled:disabled
            },
        }

        return(
            <form className="form-inline" onSubmit={(event) => handleSubmit(event,formData.values)}>
                <div className="row">
                    <div className="col">
                        <Field {...formFields.nome} component={InlineField}/>
                        
                    </div>

                    <div className="col">
                        <Field {...formFields.tipo} component={InlineField}/>
                    </div>

                    <div className="col-12">
                        <SubHeader title="Inserir Imagem" />
                    </div>

                    <div className="col-12">    
                        <Field {...formFields.image} component={UploadImage}/>
                    </div>

                    <div className="col-12">
                        <SubHeader title="Oferta" />
                    </div>

                    <div className="col-12">
                        <Field 
                            name="items"
                            filters={filters}
                            component={SelectProducts}
                            disabled={disabled}
                         />
                    </div>
        
                    <div className="col-12">
                        <Field label="Insira informações sobre a oferta" component={RitchTextEditor} name="description" disabled={disabled}/>
                    </div>
        
                    <div className="col-12">
                        <SubHeader title="Filtros" />
                    </div>

                    <div className="col-12 filters">
                        <Field name="filters" filters={filters} component={Filters} />
                        {isFetching &&
                            <ContentLoader />
                        }                        
                    </div>
        
                    <div className="col-12 text-right mt-4">
                        <Link to="/offerings" className="btn btn-grey inverse mr-5">CANCELAR <i className="fa fa-times-circle"></i></Link>
                        <Button classList="btn-purple inverse" type="submit" icon="fa fa-check-circle">SALVAR</Button>
                    </div>
                </div>

                {isSaving &&
                    <ModalLoader />
                }
                <ResponseModal />
            </form>
        )   
    }
}

const validate = (values) =>{
    const errors = {}

    if(!values.name){
        errors.name = "O nome da oferta é obrigatório."
    }
    if(!values.offering_type){
        errors.offering_type = "Selecione o tipo da oferta."
    }
    if(!values.image_url){
        errors.image_url = "A imagem é obrigatória."
    }
    if(!values.items.length){
        errors.items = "Selecione os produtos."
    }
    if(!values.description){
        errors.description = "A descrição é obrigatória."
    }
    return errors
}

AddOfferingForm = reduxForm({
    form: 'addOfferingForm',
    validate,
    enableReinitialize: true,
    destroyOnUnmount:true
})(AddOfferingForm)

const mapStateToProps = (store) => {
    return {
        formData: store.form.addOfferingForm,
        filters: store.offeringsStore.filters,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving,
        initialValues: store.offeringsStore.currentOffering
    }
}

export default connect(mapStateToProps)(AddOfferingForm)