import React from 'react'
import { CircularProgress }  from 'rmwc'
import '@rmwc/circular-progress/circular-progress.css'

const Loader = (props) => {
    return(
        <div className='loader'>
            <CircularProgress size="xlarge" theme="secondary" />
        </div>
    )
}

export default Loader