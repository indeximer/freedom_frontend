import React from 'react'
import { connect } from 'react-redux'

//actions
import { addOfferingstAsync } from '../../redux/actions/offeringsActions'
import { handleModal } from '../../redux/actions/modalActions'

//components
import Main from '../../components/layout/Main'
import PageHeader from '../../components/common/headers/PageHeader'
import AddOfferingForm from './AddOfferingForm'
import ResponseModal from '../../components/common/Popup/ResponseModal'

const AddOffering = (props) => {

    const handleSubmit = (offering) => {
        props.dispatch(addOfferingstAsync(JSON.stringify(offering)))
            .then((res) => {
                const modal = {
                    type:'response',
                    icon: 'icon icon-confirma color-green',
                    success: res.payload.name ? true : false,
                    message: 'Oferta criada com sucesso!',
                    pathTo:'/offerings',
                    handleModal: () => props.dispatch(handleModal({}))
                }
                props.dispatch(handleModal(modal))
            })
    }

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
                        
                        <AddOfferingForm onSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>

            <ResponseModal />
        </Main>
    )
}


export default connect()(AddOffering)