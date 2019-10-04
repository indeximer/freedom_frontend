import React, { Component } from 'react'
import propTypes from 'prop-types'

//Components
import CheckboxField from '../../components/common/form/CheckboxField'
import Dropdown from '../../components/common/Dropdown'

class PromoCodeTr extends Component{

    state = {
        disabled:true
    }

    render(){
        const { disabled } = this.state
        const { row, disabledRow } = this.props

        return(
            <tr>
                <td>{row.promo_code}</td>
                <td>{row.description}</td>
                <td>
                    {row.situation.status === 'active'
                        ? <strong className="color-green">ATIVO</strong>
                        : <strong>INATIVO</strong>
                    }
                </td>
                <td className="nowrap">
                    {row.actions}
                </td>
            </tr>
        )
    }

    static propTypes = {
        row: propTypes.object.isRequired
    }
}

export default PromoCodeTr