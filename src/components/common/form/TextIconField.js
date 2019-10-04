import React from 'react'
import PropTypes from 'prop-types'

const TextIconField = (props) => (
  <div className="col-12 icon-input">
      <i className={props.icon}></i>
      <input {...props} className="form-control form-control-lg" />
  </div>
)

TextIconField.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default TextIconField