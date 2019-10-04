import React from 'react'
import PropTypes from 'prop-types'

const SubHeader = ({ title, classList }) =>{
    return(
        <div className={`sub-header underline-header mb-3 ${classList}`}>
            <div className="col-auto px-0">
                <h2>{title}</h2>
            </div>
            <div className="col pr-0">
                <hr/>
            </div>
        </div>
    )
}

SubHeader.propTypes = {
    title: PropTypes.string,
    classList: PropTypes.string
}

export default SubHeader