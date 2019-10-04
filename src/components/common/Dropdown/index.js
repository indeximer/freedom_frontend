import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//components
import FadeComponents from '../FadeComponents'

class Dropdown extends Component {

    state ={
        show: false
    }

    handleClick = (cb = () => null) => {
        let newState = this.state
        newState.show = !newState.show
        this.setState({newState})
        
        cb()
    }

    render() {

        const { show } = this.state
        let { disabled, items } = this.props

        return(
            <div className="dropdown">
                <button className={`btn ${show ? 'opened' : ''}`} disabled={disabled} type="button" onClick={() => this.handleClick()}>
                </button>
                <FadeComponents>
                    {show &&
                        <div className="dropdown-menu show">
                            {items.map((item, index) => {
                                if(item.type === 'button'){
                                    return <button type='button' className="dropdown-item" key={index} onClick={() => this.handleClick(item.onClick)}>{item.name}</button>
                                }else{
                                    return <Link className="dropdown-item" key={index} to={item.to}>{item.name}</Link>
                                }
                            })}

                        </div>
                    }
                </FadeComponents>
            </div>
        )
    }
    
    static propTypes = {
        items: PropTypes.array
    }
}

export default Dropdown