import React from 'react'
import menuItems from '../../../utils/menuItems'

//components
import ContentItem from '../../common/ContentItem'

export default props =>{

    return(
        <div className="sidebar">
            <ul>
                {menuItems().map((item,index) =>(
                    <ContentItem {...item} key={index} />
                ))}
            </ul>
        </div>
    )
}