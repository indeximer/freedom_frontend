import React from  'react'

const List = ({ children, listItems, classList }) => {
    return(
        <ul className={`list ${classList}`}>
            {listItems &&
                listItems.map((item,index) => <li key={index}>{item}</li>)
            }
            {children}
        </ul>
    )
}

export default List