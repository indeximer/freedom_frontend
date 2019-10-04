import React, { Component } from 'react'
import { connect } from 'react-redux'

//components
import Popup from './'
import Button from '../Button/index'

class ConfirmationModal extends Component {

    render(){
        const { showModal, modal } = this.props

        return (
            <Popup show={showModal && modal.type === 'confirmation'}>
                <div className="response-modal">
                    <i className={`${modal.icon || 'icon icon-negado'} ${modal.color || 'color-red'} mb-30`}></i>
                    <p className="mb-30"><strong className={`${modal.color || 'color-red'} text-uppercase`}>{modal.question || 'Excluir Registro?'}</strong></p>
                    <p className="mb-30">
                        {modal.warning || 'Esta ação não poderá ser desfeita!'}
                    </p>
                    <Button classList='btn btn-red mb-3' onClick={modal.confirmAction}>OK</Button>
                    <br/>
                    <Button classList='btn btn-naked' onClick={modal.handleModal}>Cancelar</Button>
                </div>
            </Popup>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        showModal: store.modalStore.showModal,
        modal: store.modalStore.modal
    }
}

export default connect(mapStateToProps)(ConfirmationModal)
