import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ children, classList }) => {
    return(
        <div className="table-responsive-md">
            <table className={`table ${classList}`}>
                {children}
            </table>
        </div>
    )
}

Table.propTypes = {
    children: PropTypes.any,
    classList: PropTypes.string
}

export default Table