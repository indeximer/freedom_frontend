import React from 'react'

//components
import Menu from './Menu'
import PageHeader from '../common/PageHeader'

const Main = ({ children, active, pageTitle }) => {
    return(
        <div>
            <Menu active={active} />
            <main>
                <PageHeader title={pageTitle}/>
                {children}
            </main>
        </div>
    )
}

export default Main