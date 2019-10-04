import React, {Component} from 'react'


class TablePagination extends Component{
    generatePageButtons = (currentPage, totalPages) => {
        let buttons = []
        for(let i = 0; i <= totalPages; i++){
            if(i === currentPage){
               buttons.push(<li className="page-item active"><button className="page-link">{i+1}</button></li>)
            }else{
                buttons.push(<li className="page-item"><button className="page-link">{i+1}</button></li>)
            }
        }
        return buttons
    }
    render(){
        const { currentPage, totalPages } = this.props
        return(
            <nav aria-label="Page navigation" className="pagination-wrapper d-flex align-items-start">
                <button className="page-link arrow"><i className="fa fa-arrow-left"></i></button>
                <ul className="pagination table-pagination">
                    { this.generatePageButtons(currentPage, totalPages) }
                </ul>
                <button className="page-link arrow"><i className="fa fa-arrow-right"></i></button>
            </nav>
        )
    }
}

export default TablePagination