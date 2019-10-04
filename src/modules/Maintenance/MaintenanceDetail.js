import React, { Component } from 'react'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

//actions
import { getErrorByIdAsync, postReplyAsync, putDiscardAsync } from '../../redux/actions/maintenanceActions'
import { handleModal } from '../../redux/actions/modalActions'

//helpers
import { normalizeMaintenancePayloadForPost } from '../../utils/helpers'

// components
import Main from '../../components/layout/Main'
import List from '../../components/common/List'
import Button from '../../components/common/Button'
import SectionHeader from '../../components/common/headers/SectionHeader'
import Accordion from '../../components/common/Accordion'
import ConfirmationModal from '../../components/common/Popup/ConfirmationModal'
import ResponseModal from '../../components/common/Popup/ResponseModal'
import ModalLoader from '../../components/common/loader/ModalLoader'
import MaintenanceButtons from './MaintenanceButtons'

class MaintenanceDetail extends Component {
    state = {
        newMessage: ''
    }
    componentDidMount(){
        const errorId = this.props.match.params.id
        if(errorId){
            this.props.dispatch(getErrorByIdAsync(errorId))
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.currentError.original_message){
            this.updateMessage(JSON.stringify(JSON.parse(this.props.currentError.original_message),null,4))
        }
    }

    updateMessage = (newMessage) => {
        let newState = { ...this.state }
        newState.newMessage = newMessage
        this.setState(newState)
    }

    routePush = (pathTo) => {
        this.props.dispatch(handleModal({}))
        this.props.history.push(pathTo)
    }

    handleSubmitDiscard = (payload) => {
        const modal = {
            type: 'confirmation',
            icon: 'icon icon-excluir',
            question: 'Cancelar Registro?',
            warning: 'Tem certeza que deseja realizar esta ação?',
            handleModal: () => this.props.dispatch(handleModal({})),
            confirmAction: () => this.props.dispatch(putDiscardAsync(payload))
                                    .then((res) => this.routePush('/maintenance'))
        }
        this.props.dispatch(handleModal(modal))
    }

    handleSubmitReply = (payload, ackType, newMessage, replyType = false ) => {
        const payloadJson = normalizeMaintenancePayloadForPost(payload, ackType, newMessage, replyType)
        let question = ''
        let icon = ''
        let warning = ''
        let color = ''

        if(!replyType){
            icon = 'icon icon-load'
            question = 'Reenviar registro à fila? .'
            warning = 'Tem certeza que deseja realizar esta ação?'
            color = 'color-grey'
        }else if(replyType === 'success'){
            icon = 'icon icon-error'
            question = 'Tratar registro com sucesso?'
            warning = 'Tem certeza que deseja realizar esta ação?'
            color = 'color-green'
        }else if(replyType === 'error'){
            icon = 'icon icon-success'
            question = 'Tratar registro com erro?'
            warning = 'Tem certeza que deseja realizar esta ação?'
            color = 'color-red'
        }
        const modal = {
            type: 'confirmation',
            question: question,
            icon: icon,
            color: color,
            warning: warning,
            handleModal: () => this.props.dispatch(handleModal({})),
            confirmAction: () => this.props.dispatch(postReplyAsync(payloadJson))
                                    .then((res) => this.routePush('/maintenance'))
        }
        this.props.dispatch(handleModal(modal))

    }



    render(){
        const { currentError, isSaving } = this.props
        const { newMessage } = this.state
        const originalMessage = currentError.original_message && JSON.stringify(JSON.parse(currentError.original_message), null, 4)
        
        return(
            <Main buttons={[MaintenanceButtons]} showSidebar={true}>
                <div className="container-fluid mt-4 mb-5 maintenance-detail">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <SectionHeader
                                iconClass="icon icon-preanalise_1"
                                iconColor="red"
                                title="Detalhes do Registro de Erro"
                            />
                        </div>
                    </div>
    
                    <div className="row">
                        <div className='col-12 col-md-7'>
                            <List classList='list-striped'>
                                <li>
                                    <span className="color-red">audit_information</span>: <br/> 
                                    creation_date: {currentError.audit_information && currentError.audit_information.creation_date} <br/>
                                    update_date: {currentError.audit_information && currentError.audit_information.update_date}
                                </li>
                                <li>id: {currentError.id}</li>
                                <li>error_date: {currentError.error_date}</li>
                                <li>service_name: {currentError.service_name}</li>
                                <li>
                                    <Accordion 
                                        title="erros:"
                                        open={true}
                                        content={currentError.erros}
                                    />                                
                                </li>
                                <li>original_exchange: {currentError.original_exchange}</li>
                                <li>original_queue: {currentError.original_queue}</li>
                                <li>maintenance_target_event: {currentError.maintenance_target_event}</li>
                                <li>status_reprocess: {currentError.status_reprocess}</li>
                                <li>trace_id: {currentError.trace_id}</li>
                                <li>original_tag: {currentError.original_tag}</li>
                                <li>
                                    <Accordion 
                                        title="authorization:"
                                        content={currentError.authorization}
                                    />                                
                                </li>
                                <li>
                                    <Accordion 
                                        title="Original Message:"
                                        content={<pre>{originalMessage}</pre>}
                                    />                                
                                </li>
                            </List>
                        </div>
    
                        <div className='col-12 col-md-5'>
                            <p><strong>newMessage:</strong></p>
                            <textarea className="code-edit" value={newMessage} onChange={(event) => this.updateMessage(event.target.value)}>{newMessage}</textarea>

                            <div className="row mt-4 align-items-end">
                                <div className="col-3">
                                    <Button classList="btn-red inverse" icon="icon icon-excluir" onClick={() => this.handleSubmitDiscard(currentError)}>cancel</Button>
                                </div>
                                <div className="col-3">
                                    <Button classList="btn-grey inverse" icon="icon icon-load" onClick={() => this.handleSubmitReply(currentError, 'retry', newMessage)}>retry</Button>
                                </div>
    
                                <div className="col-6">
                                    <fieldset>
                                        <legend align="center">ack-reply</legend>
                                        <Button classList="btn-red" icon="icon icon-success" onClick={() => this.handleSubmitReply(currentError, 'ack_reply', newMessage, 'error')}>error</Button>
                                        <Button classList="btn-green" icon="icon icon-error" onClick={() => this.handleSubmitReply(currentError, 'ack_reply', newMessage, 'success')}>success</Button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ConfirmationModal />
                <ResponseModal />
                {isSaving &&
                    <ModalLoader />
                } 
            </Main>
        )
    }
    
}

const mapStateToProps = (store) => {
    return { 
        currentError: store.maintenanceStore.currentError,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

export default withRouter(connect(mapStateToProps/*,mapDispatchToProps*/)(MaintenanceDetail))