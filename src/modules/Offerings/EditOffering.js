import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import { editOfferingAsync, editOfferingFiltersAsync } from '../../redux/actions/offeringsActions'
import { handleModal } from '../../redux/actions/modalActions'

//components
import Main from '../../components/layout/Main'
import PageHeader from '../../components/common/headers/PageHeader'
import AddOfferingForm from './AddOfferingForm'
import ResponseModal from '../../components/common/Popup/ResponseModal'

class EditOffering extends Component{

    handleResponseModal = (res) => {
        const modal = {
            type:'response',
            success: res.payload.name ? true : false,
            icon: 'icon icon-confirma color-green',
            message: "Oferta editada com sucesso!",
            pathTo:'/offerings',
            handleModal: () => this.props.dispatch(handleModal({}))
        }
        this.props.dispatch(handleModal(modal))
    }

    handleSubmit = (values) => {
        const status = values.situation.status
        if(status === 'created'){
            this.props.dispatch(editOfferingAsync(values))
                .then((res) => this.handleResponseModal(res))
        }else{
            this.props.dispatch(editOfferingFiltersAsync(values))
                .then((res) => this.handleResponseModal(res))
        }
    }

    render(){

        const offeringId = this.props.match.params.id
        
        return(
            <Main showSidebar={true}>
                <div className="container pb-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <PageHeader classList="w-100 underline-header mb-3">
                                        <div className="col-auto px-0">
                                            <h1>Sistema de gerenciamento de produtos</h1>
                                        </div>
                                        <div className="col pr-0">
                                            <hr/>
                                        </div>
                                    </PageHeader>
                                </div>
                            </div>
                            <AddOfferingForm onSubmit={this.handleSubmit} offeringId={offeringId} />
                        </div>
                    </div>
                </div>

                <ResponseModal />
            </Main>
        )
    }
}

export default withRouter(connect()(EditOffering))