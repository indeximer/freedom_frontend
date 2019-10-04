import React from 'react'

//components
import Loader from './Loader'
import FadeComponents from '../FadeComponents'

const ModalLoader = (props) => {
    return(
        <FadeComponents>
            <div className="popup-mask">
                <Loader/>
            </div>
        </FadeComponents>  
    )
}

export default ModalLoader