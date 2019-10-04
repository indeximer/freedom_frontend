import React, { Component } from 'react'
import { connect } from "react-redux"

//actions
import { selectAll, unselectAll } from '../../../redux/actions/maintenanceActions'

class Thead extends Component{
    toggleSelectAll = () => {
        const { errors, selectAll, unselectAll } = this.props

        const selectedErrors = errors.filter(item => item.checked !== false)
        if(selectedErrors.length < errors.length){
            selectAll()   
        }else{
            unselectAll()
        }
    }
    render(){
        const { headers, disabled } = this.props
        return(
            <thead>
                <tr>
                    <th><button disabled={disabled} className="color-red" type='button' onClick={this.toggleSelectAll}>Select all</button></th>
                    {headers.map((header,index) =>(
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        errors: store.maintenanceStore.errors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAll: () => {
            dispatch(selectAll())
        },
        unselectAll: () => {
            dispatch(unselectAll())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thead)