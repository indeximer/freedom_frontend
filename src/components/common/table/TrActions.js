import React, { Component } from 'react'
import propTypes from 'prop-types'
import {stripTags} from '../../../utils/helpers'

//Components
//import CheckboxField from '../form/CheckboxField'
//import Dropdown from '../Dropdown'

class TrActions extends Component{

    state = {
        disabled:true
    }

    handleChange = () => {
        let newState = this.state
        newState.disabled = !newState.disabled
        this.setState({newState})
    }

    switchStatus = (status) => {
        switch (status) {
            case 'active':
                return <strong className='color-green'>PUBLICADO</strong>
            case 'created':
                return <strong>RASCUNHO</strong>
            case 'suspended':
                return <strong>SUSPENSO</strong>
            default:
                break
        }
    }

    render(){
        const { disabled } = this.state
        const { row, disabledRow } = this.props

        return(
            <tr>
                <td>
                    {row.image
                        ? <img src={row.image} alt="" />
                        : row.images.map((image, index) => (
                            <span className="image-wrapper"  key={index}>
                                <img src={image} alt="" />
                                <span>+</span>
                            </span>
                        ))
                    }
                        
                </td>
                <td>{row.name}</td>
                <td className="description">{stripTags(row.description)}</td>
                <td>{row.user}</td>
                <td>
                    {this.switchStatus(row.status)}
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

export default TrActions