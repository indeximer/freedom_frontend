import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//components
import Popup from './'
import Button from '../Button/index'

class ResponseModal extends Component {

    routePush = () => {
        const modal = this.props.modal
        const route = this.props.history
        const location = this.props.location.pathname
        modal.handleModal()

        if(modal.pathTo === location){
            modal.reload()
        }else{
            route.push(modal.pathTo)
        }        
    }

    render(){
        const { showModal, modal } = this.props

        return (
            <Popup show={showModal && modal.type === 'response'}>
                <div className="response-modal">
                    {modal.success
                        ? (
                            <div>
                                <i className={`mb-30 ${modal.icon}`}></i>
                                <p className="mb-30 message"><strong className="color-grey text-uppercase">{modal.message}</strong></p>
                                <Button classList='btn btn-red' onClick={this.routePush}>OK</Button>
                            </div>
                        )
                        : (
                            <div>
                                <i className="icon icon-negado color-red mb-30"></i>
                                {modal.message 
                                    ? (
                                        <p className="mb-30 message"><strong className="color-red text-uppercase">{modal.message}</strong></p>
                                    )
                                    : (
                                        <p className="mb-30 message"><strong className="color-red text-uppercase">Ocorreu um erro,<br/>tente novamente mais tarde</strong></p>
                                    )
                                }
                                <Button classList='btn btn-red' onClick={modal.handleModal}>OK</Button>
                            </div>
                        )
                    }
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

export default withRouter(connect(mapStateToProps)(ResponseModal))