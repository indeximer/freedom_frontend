import React from 'react'
import propTypes from 'prop-types'

//Components
import FadeComponents from '../FadeComponents'
import {TrActions} from './index'

const Tbody = ({ children, rows, disabled }) => {

    const switchRowType = (rows) => {
        if(children){
            return children
        }else{
            return (
                rows.map((row,index) =>(
                    <TrActions row={row} disabledRow={disabled} key={index}/>
                ))
            )
        }
    }

    return(
        <FadeComponents component='tbody'>
            {switchRowType(rows, disabled)}
        </FadeComponents>
    )
}

Tbody.propTypes = {
    children:propTypes.any,
    rows: propTypes.array.isRequired
}

export default Tbody