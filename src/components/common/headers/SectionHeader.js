import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const SectionHeader = ({ iconClass, iconText, iconColor, title, btnPath = null, btnIconClass, btnColor, btnText, classList, btnAction }) =>{
    return(
        <div className={`section-header ${classList}`}>
            <h1>
                {iconClass
                    ? <i className={`${iconClass} ${iconColor}`}></i>
                    : <span className={iconColor}>{iconText}</span>
                }
                {title}
            </h1>

            {btnPath &&
                <Link to={btnPath} className={`btn btn-${btnColor}`}><i className={btnIconClass}></i> <br/> {btnText}</Link>
            }

            {btnAction &&
                <button onClick={btnAction} className={`btn btn-${btnColor}`}><i className={btnIconClass}></i> <br/> {btnText}</button>
            }
        </div>
    )
}

SectionHeader.propTypes = {
    iconClass: PropTypes.string,
    iconText: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
    btnPath:PropTypes.string,
    btnIconClass:PropTypes.string,
    btnColor:PropTypes.string,
    btnText:PropTypes.string,
    classList: PropTypes.string
}

export default SectionHeader