import React, {Component} from 'react'
import PropTypes from 'prop-types'

class InlineForm extends Component{

    render(){
        const {children, handleSubmit} = this.props

        return(
            <div className="row">
                <form className="form-inline justify-content-between" onSubmit={handleSubmit}>
                    {children}
                </form>
            </div>
        )
    }

    PropTypes = {
        children: PropTypes.any,
        handleSubmit: PropTypes.func
    }
}

export default InlineForm