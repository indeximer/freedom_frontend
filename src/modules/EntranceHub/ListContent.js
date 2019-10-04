import React from 'react'
import PropTypes from 'prop-types'

// components
import ContentItem from '../../components/common/ContentItem'

const ListContent = ({ items }) => {
  return (
    <ul className="row justify-content-center list-content">
        {items.map((item,index) =>(
            <ContentItem key={index} {...item}/>
        ))}
    </ul>
  )
}

ListContent.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ListContent