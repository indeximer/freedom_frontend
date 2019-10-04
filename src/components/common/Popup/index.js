import React from 'react'
import PropTypes from 'prop-types'
import FadeComponents from '../FadeComponents'

const Popup = ({ children, callBack, classList, handleModal, show }) => {

    return(
        <FadeComponents>
          {show &&
            <div className="popup-mask" onClick={handleModal} key="0">
                <div className={`popup-content ${classList}`} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
          }
        </FadeComponents>            
    )
}

Popup.propTypes = {
    children: PropTypes.any,
    callBack: PropTypes.func,
    classList: PropTypes.string
}

export default Popup