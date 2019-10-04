import React from 'react'
import PropTypes from 'prop-types'
import If from '../If'

const Button = ({ children, icon, classList, type = 'button', onClick, disabled }) => (
  <button type={type} className={`btn ${classList}`} onClick={onClick} disabled={disabled}>
        <If test={icon}>
            <i className={icon}></i>
        </If>
      
        {children}
  </button>
)

Button.propTypes = {
  icon: PropTypes.string,
  classList: PropTypes.string,
  children: PropTypes.any
}

export default Button