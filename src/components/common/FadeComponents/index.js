import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

const FadeComponents = ({children, component, classList = null, transition = 'fade'}) => {

    return(
        <CSSTransitionGroup
          component={component}
          className={classList}
          transitionName={transition}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>

          {children}
                      
        </CSSTransitionGroup>            
    )
}

FadeComponents.propTypes = {
    children: PropTypes.any,
    component: PropTypes.string
}

export default FadeComponents