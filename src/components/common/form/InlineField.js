import React from 'react'
import PropTypes from 'prop-types'

//components
import SelectField from './SelectField'

 const InlineField = ({ label, maxLength, name, type, placeholder, options, disabled = false, input, meta, autoFocus = '' }) => {

    const switchFields = (type, placeholder, options, disabled) => {
        switch(type){
            case 'text':
            case 'email':
            case 'password':
            case 'number':
            case 'checkbox':
                return <input maxLength={maxLength} type={type} {...input} name={name} component="input" placeholder={placeholder} disabled={disabled} className="form-control" />
            case 'select':
                return <SelectField  name={name} component={SelectField} options={options} disabled={disabled} connected={true} input={input} /> 
            default:
                break;
        }
    }

    const {touched, error } = meta

    return(
        <div className={`form-group mb-4 ${type === 'checkbox' ? 'checkbox-group':''}`}>
            <label>{label}</label>
            {switchFields(type, placeholder, options, disabled)}
            {touched &&
                (error && <span className='error'>{error}</span>)
            }
        </div>
    )
}

InlineField.propTypes = {
    label: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool
}

export default InlineField