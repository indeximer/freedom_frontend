import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// components
import Main from '../../components/layout/Main'
import SearchForm from './SearchForm';
import MaintenanceButtons from './MaintenanceButtons'

class Search extends Component {
    onSubmit = (formData) =>{
        this.props.history.push('/maintenance')
    }
    
    render(){
        return (
            <Main buttons={[MaintenanceButtons]} showSidebar={true}>
                <div className="container-fluid mt-4">
                    <SearchForm onSubmit={this.onSubmit} />
                </div>
            </Main>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formData: store.form.searchForm,
    }
}

export default withRouter(connect(mapStateToProps)(Search))