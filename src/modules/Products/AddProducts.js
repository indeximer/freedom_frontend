import React from 'react'

//components
import Main from '../../components/layout/Main'
import PageHeader from '../../components/common/headers/PageHeader'
import AddProductsForm from './AddProductsForm'

const AddProducts = (props) => {

    const handleSubmit = (values) => {
        console.log(values)
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
                        
                        <AddProductsForm onSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default AddProducts;