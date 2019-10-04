import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const MaintanceButtons = (props) => {
    return(
        <Fragment>
            <Link to="/maintenance/search" className="btn btn-circle"><i className="icon icon-search"></i></Link>
        </Fragment>
    )
}

export default MaintanceButtons