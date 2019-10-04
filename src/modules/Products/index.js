import React, {Component} from 'react'
import { connect } from "react-redux";

//actions
import { getProductsAsync } from '../../redux/actions/productsActions'
// import { handleModal } from '../../redux/actions/modalActions'

// components
import Main from '../../components/layout/Main'
import SectionHeader from '../../components/common/headers/SectionHeader'
import {TableBuilder} from '../../components/common/table'
// import SearchBar from '../common/SearchContainer/SearchBar'
// import ConfirmationModal from '../common/Popup/ConfirmationModal'
import ContentLoader from '../../components/common/loader/ContentLoader'
// import ModalLoader from '../common/loader/ModalLoader'


class ListProducts extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsAsync());
    }

    changeStatus = (offering, newStatus) => {
        // const payload = {
        //     offering_id: offering.offering_id,
        //     offering_type: offering.offering_type,
        //     name: offering.name,
        //     situation: {
        //         status: newStatus
        //     }
        // }

        // if(newStatus === 'deactivated') {
        //     //pops confirmation modal, sending the remove method as a callback to the modal confirmation buttom
        //     const modal = {
        //         handleModal: () => this.props.dispatch(handleModal({})),
        //         confirmAction: () => this.props.dispatch(updateOfferingStatusAsync(payload))
        //                                 .then((res) => this.props.dispatch(handleModal({})))
        //     }
        //     this.props.dispatch(handleModal(modal))
        // }else{
        //     this.props.dispatch(updateOfferingStatusAsync(payload))
        // }
    }

    createActions = (offering) => {
        const offeringId = offering.offering_id
        const status = offering.situation.status

        switch (status) {                
            case 'created':
                return [
                    {
                        name:'Publicar',
                        type:'button',
                        onClick:() => this.changeStatus(offering, 'active')
                    },
                    {
                        name:'Editar',
                        type:'link',
                        to:`/offerings/edit/${offeringId}`
                    },
                    {
                        name:'Remover',
                        type:'button',
                        onClick:() => this.changeStatus(offering, 'deleted')
                    }
                ]
            case 'active':
            default: return []
        }
    }

    render(){
        const { products, isFetching, /*isSaving*/ } = this.props

        const tableDataObj = {
            thead : ['Selecionar', 'Imagem', 'Nome', 'Usuário', 'Status', 'Ações'],
            tbody: products
        }
    
        return (
            <Main showSidebar={true}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <SectionHeader
                                iconClass="icon icon-ofertas" 
                                iconColor="red" 
                                title="Lista de produtos"
                                btnPath="/products/add"
                                btnIconClass="fa fa-plus"
                                btnColor="red"
                                btnText="Inserir Produto"
                            />
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-12">
                            <TableBuilder tableData={tableDataObj} />

                            {isFetching &&
                                <ContentLoader/>
                            }
                        </div>
                    </div>
                </div>
            </Main>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        products: store.productsStore.products,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
};

export default connect(mapStateToProps)(ListProducts)