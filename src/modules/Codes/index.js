import React, { Component, Fragment } from 'react'
import { change, initialize } from 'redux-form'
import { connect } from 'react-redux'
import sortBy from 'sort-by'

//search
import { filterCollection } from '../../utils/search'

//actions
import { 
    getPromoCodesAsync,
    searchPromoCodesAsync,
    addPromoCodeAsync,
    updatePromoCodeStatusAsync,
    editPromoCodeAsync,
    uploadPromoCodesAsync
} from '../../redux/actions/promoCodesActions'

import { handleModal } from '../../redux/actions/modalActions'

// components
import Main from '../../components/layout/Main'
import UploadCsv from '../../components/common/form/UploadCsv'
import SectionHeader from '../../components/common/headers/SectionHeader'
import Button from '../../components/common/Button'
import Search from '../../components/common/SearchContainer/Search'
import ModalLoader from '../../components/common/loader/ModalLoader'
import ResponseModal from '../../components/common/Popup/ResponseModal'
import FadeComponents from '../../components/common/FadeComponents'
import PromoCodeForm from './PromoCodeForm'
import CodesResponseModal from './CodesResponseModal'

class ListCodes extends Component {

    state = {
        showForm: false,
        showUpload: false,
        currentPromoCode: {},
        readOnly: false,
        modalDetails: {
            show: false,
            promocodes: []
        }
    }

    componentDidMount(){
        const userRoles = sessionStorage.getItem('user-roles').split(',')
        let readOnly = !userRoles.includes('OD_PRD_PROMOCODE_ADM')
        if(readOnly){
            this.setState({readOnly})
        }

        this.props.dispatch(getPromoCodesAsync())
    }

    searchPromocodes = (e, param) => {
        e.preventDefault()
        if(param && param.length > 3){
            this.props.dispatch(searchPromoCodesAsync(param))
        }else{
            this.props.dispatch(getPromoCodesAsync())
        }
    }

    handleShowForm = (promoCode) => {
        //this.props.dispatch(reset('addOPromoCodeForm'))
        this.props.dispatch(initialize('addOPromoCodeForm'))
        let newState = this.state
        newState.showForm = !newState.showForm
        newState.currentPromoCode = promoCode
        this.setState({newState})
    }

    handleShowUpload = (e = null) =>{
        if(e){
            console.log(e)
            e.stopPropagation()
        }
        let newState = this.state
        newState.showUpload = !newState.showUpload
        this.setState({newState})
    }

    handleEdit = (promoCode) => {
        this.handleShowForm(promoCode)

        this.props.dispatch(change('addOPromoCodeForm', 'promo_code', promoCode.promo_code))
        this.props.dispatch(change('addOPromoCodeForm', 'edit', promoCode))
        this.props.dispatch(change('addOPromoCodeForm', 'description', promoCode.description))
    }

    handleSubmit = (payload) => {        
        if(payload.edit){
            let editCode = {...payload.edit}
            editCode.description = payload.description
            this.props.dispatch(editPromoCodeAsync(editCode))
                .then((res) => this.props.dispatch(getPromoCodesAsync()))
        }else{
            this.props.dispatch(addPromoCodeAsync(payload))
                .then((res) => this.props.dispatch(getPromoCodesAsync()))
        }
        this.handleShowForm()
    }

    changeStatus = (promoCode, status) => {
        promoCode.situation.status = status
        this.props.dispatch(updatePromoCodeStatusAsync(promoCode))
            .then((res) => this.props.dispatch(getPromoCodesAsync()))
    }

    createActions = (promoCode) => {
        const status = promoCode.situation.status

        switch (status) {
            case 'active':
                return (
                    <Fragment>
                        <Button onClick={() => this.changeStatus(promoCode, 'active')} classList="btn-round-text green sm" disabled={true}><i className="icon icon-error"></i><br/>ativar</Button>
                        <Button onClick={() => this.changeStatus(promoCode, 'deactivated')} classList="btn-round-text grey ghost sm" disabled={false}><i className="icon icon-success"></i><br/>desativar</Button>
                        <Button onClick={() => this.handleEdit(promoCode)} classList="btn-round-text purple sm" disabled={false}><i className="icon icon-edit"></i><br/>editar</Button>
                    </Fragment>
                )
            case 'deactivated':
                return (
                    <Fragment>
                        <Button onClick={() => this.changeStatus(promoCode, 'active')} classList="btn-round-text green sm" disabled={false}><i className="icon icon-error"></i><br/>ativar</Button>
                        <Button onClick={() => this.changeStatus(promoCode, 'deactivated')} classList="btn-round-text grey ghost sm" disabled={true}><i className="icon icon-success"></i><br/>desativar</Button>
                        <Button onClick={() => this.handleEdit(promoCode)} classList="btn-round-text purple sm" disabled={false}><i className="icon icon-edit"></i><br/>editar</Button>
                    </Fragment>
                )
            default: return <Fragment></Fragment>
        }
    }

    handleModalDetailsDismiss = () => {
        let newState = this.state
        newState.modalDetails.show = false
        this.setState(newState)
    }
    csvUpload = (payload) =>{
        this.props.dispatch(uploadPromoCodesAsync(payload))
            .then((res) => {
                if(res.payload.status_code){
                    const modal = {
                        type:'response',
                        success: false,
                        message: res.payload.message,
                        handleModal: () => this.props.dispatch(handleModal({}))
                    }
                    this.props.dispatch(handleModal(modal))
                }else{
                    console.log(res.payload.details)
                    let newState = this.state
                    newState.modalDetails = {
                        show: true,
                        promocodes: res.payload.details
                    }
                    this.setState(newState)
                    this.props.dispatch(getPromoCodesAsync())
                }
            })
    }

    render(){
        let { promoCodes } = this.props

        promoCodes = promoCodes.sort(sortBy('-situation.status_update_date'))

        const { isFetching, isSaving } = this.props
        const { showForm, showUpload, query, currentPromoCode, readOnly, modalDetails } = this.state

        promoCodes = promoCodes.map(promoCode => {
            return {
                ...promoCode,
                actions: this.createActions(promoCode)
            }
        })

        const tableDataObj = {
            thead : ['Código', 'Descrição', 'Status', 'Ações'],
            tbody: promoCodes
        }

        const showingData = Object.assign({}, tableDataObj)
        showingData.tbody = filterCollection(query, promoCodes, 'promo_code')
        if(showingData.tbody.length === 0){
            showingData.tbody = filterCollection(query, promoCodes, 'description')
        }

        return (
            <Main showSidebar={true}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <SectionHeader
                                iconText="1234"
                                iconColor="red"
                                title="Registro de Códigos Promocionais"
                            />
                        </div>
                    </div>

                    <div className="row mb-3 promo-codes-header">
                        <Search handleSearch={this.searchPromocodes} />
                        
                        <div className="col-12 col-md-2">
                            <Button disabled={readOnly} classList={`btn btn-red w-100 ${readOnly ? 'disabled-link' : ''}`} icon="fa fa-plus" onClick={this.handleShowForm} >Inserir Código</Button>
                        </div>
                        <div className="col-12 col-md-2">
                            <Button disabled={readOnly} classList={`btn btn-red w-100 ${readOnly ? 'disabled-link' : ''}`} icon="fa fa-plus" onClick={this.handleShowUpload} >Upload CSV</Button>
                        </div>
                    </div>
                    
                    <FadeComponents>
                        {showUpload && 
                            <div className="row">
                                <div className="col-12">
                                    <UploadCsv onUpload={this.csvUpload} onDismiss={this.handleShowUpload} />
                                </div>
                            </div>
                        }
                    </FadeComponents>

                    <div className="row">
                        <div className="col-12">
                            <PromoCodeForm 
                                onSubmit={this.handleSubmit}
                                showingData={showingData}
                                showForm={showForm}
                                currentPromoCode={currentPromoCode}
                                isFetching={isFetching}
                                disabled={readOnly}
                            />
                        </div>
                    </div>
                </div>

                {isSaving &&
                    <ModalLoader/>
                }

                <ResponseModal />
                <CodesResponseModal 
                    show={modalDetails.show}
                    responseDetails={modalDetails.promocodes}
                    handleClick={this.handleModalDetailsDismiss} />
            </Main>
        )
    }
}

// ListCodes = reduxForm({
//     form: 'addOPromoCodeForm',
//     enableReinitialize: true
// })(ListCodes)

const mapStateToProps = (store) => {
    return {
        // formData: store.form.addOPromoCodeForm,
        promoCodes: store.promoCodesStore.promoCodes,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

export default connect(mapStateToProps)(ListCodes)