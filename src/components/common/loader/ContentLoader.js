import React from 'react'

//components
import Loader from './Loader'
import FadeComponents from '../FadeComponents'

const ContentLoader = (props) => {
    return(
        <FadeComponents>
            <div className="content-loader">
                <Loader/>
            </div>
        </FadeComponents>
    )
}

export default ContentLoader