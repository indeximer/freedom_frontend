import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ContentItem = ({ icon, text, title, color, path }) => {

    const switchIcon = (icon = null, text = null) => {
        if(icon){
            return <i className={icon}></i>
        }else{
            return <span>{text}</span>
        }
    }

    return (
        <li className={`content-item col ${color}`}>
            <Link to={path}>
                {switchIcon(icon,text)}
                <p>{title}</p>
            </Link>
        </li>
    )
}

ContentItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default ContentItem;