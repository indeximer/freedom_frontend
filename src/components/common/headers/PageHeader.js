import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ children, classList }) =>{
    return(
        <div className={`page-header mt-5 ${classList}`}>
            {children}
        </div>
    )
}

PageHeader.propTypes = {
    children: PropTypes.any,
    classList: PropTypes.string
}

export default PageHeader