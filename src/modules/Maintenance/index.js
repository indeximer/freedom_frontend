import React, {Component} from 'react'
import { connect } from "react-redux"
import sortBy from 'sort-by'
import { reset } from 'redux-form'

//search
import { filterCollection } from '../../utils/search'

//actions
import { getErrorsAsync, postMassReplyAsync } from '../../redux/actions/maintenanceActions'
import { handleModal } from '../../redux/actions/modalActions'
import { unselectAll } from '../../redux/actions/maintenanceActions'

//utils
import { buildQueryString } from '../../utils/helpers'

// components
import Main from '../../components/layout/Main'
import Button from '../../components/common/Button'
import SectionHeader from '../../components/common/headers/SectionHeader'
import {TableBuilder} from '../../components/common/table'
import SearchBar from '../../components/common/SearchContainer/SearchBar'
import ResponseModal from '../../components/common/Popup/ResponseModal'
import ConfirmationModal from '../../components/common/Popup/ConfirmationModal'
import ModalLoader from '../../components/common/loader/ModalLoader'
import TrMaintenance from './TrMaintenance'
import MaintenanceButtons from './MaintenanceButtons'

class Maintenance extends Component {
    state = {
        query:'',
        readOnly:false
    }

    componentDidMount(){
        const userRoles = sessionStorage.getItem('user-roles').split(',')
        let readOnly = !userRoles.includes('OD_PRD_MAINTENANCE_ADM')
        if(readOnly){
            this.setState({readOnly})
        }

        const size = this.props.pagination.size
        const currentPage = this.props.pagination.currentPage

        if(this.props.searchData && this.props.searchData.values){
            const searchQuery = buildQueryString(this.props.searchData.values)
            this.props.dispatch(getErrorsAsync(currentPage, size, searchQuery))
        }else{
            this.props.dispatch(getErrorsAsync(currentPage, size))
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.searchData && nextProps.searchData.values !== this.props.searchData.values ){
            this.props.dispatch(getErrorsAsync())
        }
    }

    updateQuery = (newQuery) => {
        this.setState({query : newQuery })
    }

    handlePageChange = (size, page, searchQuery) => {
        const newPage = page - 1 
        this.props.dispatch(getErrorsAsync(newPage, size, searchQuery))
    }

    handleMassReply = (type) => {
        let items
        let question = ''
        let icon = ''
        let warning = ''
        let color = ''

        switch(type){
            case 'cancel':
                icon = 'icon icon-excluir'
                question = 'Cancelar Registros?'
                warning = 'Tem certeza que deseja realizar esta ação?'
                color = 'color-red'
                items = this.props.selectedItems.map(item =>(
                    {
                        ...item,
                        status_reprocess: "CANCEL"
                    }
                ))
                break
            case 'retry':
                icon = 'icon icon-load'
                question = 'Reenviar registros à fila?'
                warning = 'Tem certeza que deseja realizar esta ação?'
                color = 'color-grey'
                items = this.props.selectedItems.map(item =>(
                    {
                        ...item,
                        ack_type: "retry"
                    }
                ))
                break
            case 'replySuccess':
                icon = 'icon icon-error'
                question = 'Tratar registros com sucesso?'
                warning = 'Tem certeza que deseja realizar esta ação?'
                color = 'color-green'
                items = this.props.selectedItems.map(item =>(
                    {
                        ...item,
                        ack_type: "ack_reply",
                        reply_type: 'success'
                    }
                ))
                break
            case 'replyError':
                icon = 'icon icon-success'
                question = 'Tratar registro com erro?'
                warning = 'Tem certeza que deseja realizar esta ação?'
                color = 'color-red'
                items = this.props.selectedItems.map(item =>(
                    {
                        ...item,
                        ack_type: "ack_reply",
                        reply_type: 'error'
                    }
                ))
                break
            default:
                    return false
        }

        const size = this.props.pagination.size
        const currentPage = this.props.pagination.currentPage
        const searchQuery = this.props.searchData ? buildQueryString(this.props.searchData.values) : '?status_reprocess=nok'

        const modal = {
            type: 'confirmation',
            question: question,
            icon: icon,
            color: color,
            warning: warning,
            handleModal: () => this.props.dispatch(handleModal({})),
            confirmAction: () => this.props.dispatch(postMassReplyAsync(items))
                                    .then(res => this.props.dispatch(getErrorsAsync(currentPage, size, searchQuery)))
                                    .then(this.props.dispatch(unselectAll()))
                                    .then(this.props.dispatch(handleModal(modal)))
        }
        this.props.dispatch(handleModal(modal))
    }

    render(){
        let { errors, pagination, isFetching, isSaving, disableBtn, searchData } = this.props
        let searchQuery = false
        
        if(searchData && searchData.values){
            searchQuery = buildQueryString(searchData.values)
        }

        errors = errors.sort(sortBy('-error_date'))

        const tableDataObj = {
            thead : ['error_date', 'service_name', 'status_reprocess', 'trace_id', 'original_queue', 'erros'],
            tbody: errors,
            pagination: {
                active :true,
                handlePageChange: this.handlePageChange,
                searchQuery: searchQuery || '?status_reprocess=nok',
                ...pagination
            }
        }

        const { query, readOnly} = this.state
        const showingData = Object.assign({}, tableDataObj)
        showingData.tbody = filterCollection(query, errors, 'error_date')
        if(showingData.tbody.length === 0){
            showingData.tbody = filterCollection(query, errors, 'service_name')
            if(showingData.tbody.length === 0){
                showingData.tbody = filterCollection(query, errors, 'status_reprocess')
                if(showingData.tbody.length === 0){
                    showingData.tbody = filterCollection(query, errors, 'trace_id')
                    if(showingData.tbody.length === 0){
                        showingData.tbody = filterCollection(query, errors, 'original_queue')
                        if(showingData.tbody.length === 0){
                            showingData.tbody = filterCollection(query, errors, 'erros')
                        }
                    }
                }
            }
        }
        
    
        return (
            <Main buttons={[MaintenanceButtons]} showSidebar={true}>
                <div className="container-fluid maintenance mt-4">
                    <div className="row">
                        {searchQuery
                            ?   <div className="col-12 mb-4">
                                    <SectionHeader
                                        iconClass="icon icon-search"
                                        iconColor="red"
                                        title={`Foram encontrados ${pagination.totalItems} resultados`}
                                        btnColor='red'
                                        btnIconClass="fa fa-arrow-left"
                                        btnAction= {() => this.props.dispatch(reset('searchForm'))}
                                        btnText="Voltar"
                                    />
                                </div>
                            :   <div className="col-12 mb-4">
                                    <SectionHeader
                                        iconClass="icon icon-area"
                                        iconColor="red"
                                        title="Lista de Controle de Erros"
                                    />
                                </div>
                        }
                        
                    </div>

                    <div className="row mb-3">
                        <div className="col-12 col-md-5">
                            <div className="row">
                                <div className="col-auto">
                                    <Button onClick={() => this.handleMassReply('cancel')} classList="btn-round-text red" disabled={disableBtn}><i className="icon icon-excluir"></i><br/>cancel</Button>
                                </div>
                                <div className="col-auto">
                                    <Button onClick={() => this.handleMassReply('retry')} classList="btn-round-text grey" disabled={disableBtn}><i className="icon icon-load"></i><br/>retry</Button>
                                </div>
                                <div className="col-auto">
                                    <Button onClick={() => this.handleMassReply('replySuccess')} classList="btn-round-text ghost green" disabled={disableBtn}><i className="icon icon-error"></i><br/>success</Button>
                                </div>
                                <div className="col-auto">
                                    <Button onClick={() => this.handleMassReply('replyError')} classList="btn-round-text ghost red" disabled={disableBtn}><i className="icon icon-success"></i><br/>error</Button>
                                </div>
                                <SearchBar handleChange={this.updateQuery} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                            <TableBuilder isFetching={isFetching} tableData={showingData} selectAll={true} disabled={readOnly}>
                                {showingData.tbody.map((row,index) => (
                                    <TrMaintenance row={row} key={index} disabledRow={readOnly} />
                                ))}
                            </TableBuilder>
                        </div>
                    </div>
                </div>
                <ResponseModal />
                <ConfirmationModal />
                {isSaving &&
                    <ModalLoader/>
                }
            </Main>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        errors: store.maintenanceStore.errors,
        pagination: store.maintenanceStore.pagination,
        disableBtn: store.maintenanceStore.disableBtn,
        selectedItems: store.maintenanceStore.selectedItems,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving,
        searchData: store.form.searchForm
    }
}

export default connect(mapStateToProps)(Maintenance)