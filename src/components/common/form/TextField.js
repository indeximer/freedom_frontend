import React from 'react'
import PropTypes from 'prop-types'

const TextField = (props) => (
  <div className="col-12 custom-text-field">
      <label className="label-text-field">{props.label}</label>
      <input {...props} className="form-control form-control-lg custom-border-input" />
  </div>
)

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default TextField