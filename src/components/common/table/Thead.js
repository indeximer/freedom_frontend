import React from 'react'
import propTypes from 'prop-types'

const Thead = ({headers}) => {
    return(
        <thead>
            <tr>
                {headers.map((header,index) =>(
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    )
}

Thead.propTypes = {
    headers: propTypes.array.isRequired
}

export default Thead