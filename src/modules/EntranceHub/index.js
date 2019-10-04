import React from 'react'
import menuItems from '../../utils/menuItems'

// components
import Main from '../../components/layout/Main'
import PageHeader from '../../components/common/headers/PageHeader'
import ListContent from './ListContent'

export default props => {

    return (
        <Main>
            <div className="row">
                <div className="col-12 text-center mb-5 pb-3">
                    <PageHeader>
                        <h1>Bem vindo ao sistema de gerenciamento de conteúdo</h1>
                        <p>Escolha o tipo de conteúdo para incluir / gerenciar</p>
                    </PageHeader>
                </div>
            </div>
            <ListContent items={menuItems()}/>
        </Main>
    )
} 