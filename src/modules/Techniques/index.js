import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import sortBy from 'sort-by'

//search
import { filterCollection } from '../../utils/search'

//actions
import { getTechniquesAsync, deleteTechniquesAsync } from '../../redux/actions/techniquesActions'
import { handleModal } from '../../redux/actions/modalActions'

// components
import Main from '../../components/layout/Main'
import SearchBar from '../../components/common/SearchContainer/SearchBar'
import ResponseModal from '../../components/common/Popup/ResponseModal'
import ConfirmationModal from '../../components/common/Popup/ConfirmationModal'
import ContentLoader from '../../components/common/loader/ContentLoader'
import ModalLoader from '../../components/common/loader/ModalLoader'


class ListTechniques extends Component {

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

        this.props.dispatch(getTechniquesAsync())
    }

    render(){
        let { techniques, isFetching, isSaving } = this.props
        console.log(techniques)

        techniques = techniques.map(technique =>{
            return {
                ...technique,
                actions: {}
            }
        })
    
        return (
            <Main showSidebar={true}>
                <SearchBar handleChange={this.updateQuery} />

                {isFetching &&
                    <ContentLoader/>
                }

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
        techniques: store.techniquesStore.techniques,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

export default connect(mapStateToProps)(ListTechniques)