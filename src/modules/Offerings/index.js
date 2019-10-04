import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import sortBy from 'sort-by'

//search
import { filterCollection } from '../../utils/search'

//actions
import { getOfferingsAsync, updateOfferingStatusAsync } from '../../redux/actions/offeringsActions'
import { handleModal } from '../../redux/actions/modalActions'

// components
import Main from '../../components/layout/Main'
import SectionHeader from '../../components/common/headers/SectionHeader'
import {TableBuilder} from '../../components/common/table'
import SearchBar from '../../components/common/SearchContainer/SearchBar'
import ResponseModal from '../../components/common/Popup/ResponseModal'
import ConfirmationModal from '../../components/common/Popup/ConfirmationModal'
import ContentLoader from '../../components/common/loader/ContentLoader'
import ModalLoader from '../../components/common/loader/ModalLoader'
import Button from '../../components/common/Button'

class ListOfferings extends Component {

    state = {
        query: '',
        readOnly: false
    }

    updateQuery = (newQuery) => {
        this.setState({query : newQuery })
    }

    componentDidMount(){
        // const userRoles = sessionStorage.getItem('user-roles').split(',')
        // let readOnly = !userRoles.includes('OD_PRD_OFFERING_ADM')
        // if(readOnly){
        //     this.setState({readOnly})
        // }

        //this.props.dispatch(getOfferingsAsync())
    }

    changeStatus = (offering, newStatus) => {
        const payload = {
            offering_id: offering.offering_id,
            offering_type: offering.offering_type,
            name: offering.name,
            situation: {
                status: newStatus
            }
        }

        if(newStatus === 'deactivated') {
            //pops confirmation modal, sending the remove method as a callback to the modal confirmation buttom
            const modal = {
                type: 'confirmation',
                handleModal: () => this.props.dispatch(handleModal({})),
                confirmAction: () => this.props.dispatch(updateOfferingStatusAsync(payload))
                                        .then((res) => this.props.dispatch(handleModal({})))
            }
            this.props.dispatch(handleModal(modal))
        }else{
            this.props.dispatch(updateOfferingStatusAsync(payload))
                .then((res) => {
                    if(res.payload.status_code && res.payload.status_code !== 200){
                        const errorModal = {
                            type:'response',
                            success: false,
                            message: res.payload.message,
                            handleModal: () => this.props.dispatch(handleModal({}))
                        }
                        this.props.dispatch(handleModal(errorModal))
                    }
                })
        }
    }

    createActions = (offering) => {
        const offeringId = offering.offering_id
        const status = offering.situation.status

        switch (status) {
            case 'active':
                return (
                    <Fragment>
                        <Button onClick={() => this.changeStatus(offering, 'active')} classList="btn-round-text green sm" disabled={true}><i className="icon icon-error"></i><br/>publicar</Button>
                        <Button onClick={() => this.changeStatus(offering, 'suspended')} classList="btn-round-text grey ghost sm" disabled={false}><i className="icon icon-success"></i><br/>suspender</Button>
                        <Link to={`/offerings/edit/${offeringId}`} className="btn btn-round-text purple sm" disabled={true}><i className="icon icon-edit"></i><br/>editar</Link>
                        <Button onClick={() => this.changeStatus(offering, 'deactivated')} classList="btn-round-text red sm" disabled={false}><i className="icon icon-excluir"></i><br/>excluir</Button>
                    </Fragment>
                )
            case 'created':
                return (
                    <Fragment>
                        <Button onClick={() => this.changeStatus(offering, 'active')} classList="btn-round-text green sm" disabled={false}><i className="icon icon-error"></i><br/>publicar</Button>
                        <Button onClick={() => this.changeStatus(offering, 'suspended')} classList="btn-round-text grey ghost sm" disabled={true}><i className="icon icon-success"></i><br/>suspender</Button>
                        <Link to={`/offerings/edit/${offeringId}`} className="btn btn-round-text purple sm"><i className="icon icon-edit"></i><br/>editar</Link>
                        <Button onClick={() => this.changeStatus(offering, 'deactivated')} classList="btn-round-text red sm" disabled={true}><i className="icon icon-excluir"></i><br/>excluir</Button>
                    </Fragment>
                )
            case 'suspended':
                return (
                    <Fragment>
                        <Button onClick={() => this.changeStatus(offering, 'active')} classList="btn-round-text green sm" disabled={false}><i className="icon icon-error"></i><br/>publicar</Button>
                        <Button onClick={() => this.changeStatus(offering, 'suspended')} classList="btn-round-text grey ghost sm" disabled={true}><i className="icon icon-success"></i><br/>suspender</Button>
                        <Link to={`/offerings/edit/${offeringId}`} className="btn btn-round-text purple sm"><i className="icon icon-edit"></i><br/>editar</Link>
                        <Button onClick={() => this.changeStatus(offering, 'deactivated')} classList="btn-round-text red sm" disabled={false}><i className="icon icon-excluir"></i><br/>excluir</Button>
                    </Fragment>
                )
            default: return <Fragment></Fragment>
        }
    }

    render(){
        let { offerings, isFetching, isSaving } = this.props
        

        offerings = offerings.map(offering =>{
            return {
                ...offering,
                actions: this.createActions(offering)
            }
        })

        const tableDataObj = {
            thead : ['Imagem', 'Nome', 'Descrição', 'Usuário', 'Status', 'Ações'],
            tbody: offerings.sort(sortBy('-situation.status_update_date'))
        }

        const { query, readOnly } = this.state
        const showingData = Object.assign({}, tableDataObj)
        showingData.tbody = filterCollection(query, showingData.tbody)
    
        return (
            <Main showSidebar={true}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <SectionHeader
                                iconClass="icon icon-oferta"
                                iconColor="purple"
                                title="Lista de ofertas"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <SearchBar handleChange={this.updateQuery} />
                        
                        <div className="col-12 col-md-3">
                            <Link 
                                to="/offerings/add"
                                onClick = {e => readOnly ? e.preventDefault() : false}
                                className={`btn btn-purple w-100 ${readOnly ? 'disabled-link' : ''}`}
                                >Inserir Oferta <i className="fa fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                    

                    <div className="row offerings-list">
                        <div className="col-12">
                            <TableBuilder tableData={showingData} disabled={readOnly} />

                            {isFetching &&
                                <ContentLoader/>
                            }
                        </div>
                    </div>
                </div>
                <ConfirmationModal />
                <ResponseModal />
                {isSaving &&
                    <ModalLoader/>
                }
            </Main>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        offerings: store.offeringsStore.offerings,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

export default connect(mapStateToProps)(ListOfferings)