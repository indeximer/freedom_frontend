import React, { Component } from 'react'
import { connect } from "react-redux"
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Actions
import { setSelectedItem, removeSelectedItem } from '../../redux/actions/maintenanceActions'

//Components
import CheckboxField from '../../components/common/form/CheckboxField'

class TrActions extends Component{

    handleChange = (value, item) => {
        this.updateValue(value)
        if(value){
            this.props.setSelectedItem(item)
        }else{
            this.props.removeSelectedItem(item)
        }
    }

    updateValue = (newvalue) => {
        let newState = { ...this.state }
        newState.value = newvalue
        this.setState(newState)
    }


    render(){
        const { row, disabledRow } = this.props
        return(
            <tr>
                <td><CheckboxField id={row.id} disabled={disabledRow} name={row.id} checked={row.checked} value={row.checked} handleChange={() => this.handleChange(!row.checked, row)} /></td>
                {
                    row.tableCells.map((cell, index) => <td key={index} title={cell}><span>{cell}</span> <Link className={`color-red ${disabledRow ? 'disabled-link' : ''}`} to={`/maintenance/details/${row.id}`} onClick = {e => disabledRow ? e.preventDefault() : false} >ver mais</Link></td>)
                }
            </tr>
        )
    }

    static propTypes = {
        row: propTypes.object.isRequired
    }
}

const mapStateToProps = (store) => {
    return { 
        selectedItems: store.maintenanceStore.selectedItems,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedItem: (item) => {
            dispatch(setSelectedItem(item))
        },
        removeSelectedItem: (item) => {
            dispatch(removeSelectedItem(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrActions)