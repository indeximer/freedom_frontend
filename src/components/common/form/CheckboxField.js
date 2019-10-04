import React from 'react'
//import PropTypes from 'prop-types'

const CheckboxField = ({ id, name, handleChange, checked, value, label = null, disabled = false}) => {
    return(
        <div className="custom-control custom-checkbox">
            <input 
                id={id}
                type="checkbox"
                className="custom-control-input"
                name={name}
                checked={checked}
                value={value}
                disabled={disabled}
                onChange={(event) => handleChange(event)} />
            <label className="custom-control-label" htmlFor={id}>{label}</label>
        </div>
    )
}

export default CheckboxField