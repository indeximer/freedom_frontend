import React from 'react'
import PropTypes from 'prop-types'
import Pagination from "react-js-pagination";

//components
import {Table, Thead, Tbody, TableFilters} from './index'
import {SelectField} from '../form'
import Loader from '../loader/Loader'

const TableBuilder = ({children, isFetching, tableData, disabled, classList, selectAll }) => {

    const {thead, tbody, filters, pagination } = tableData
    return(
        <div className="table-wrapper">
            {isFetching &&
                <div className="table-loader">
                    <Loader/>
                </div>
            }
            
            {filters &&
                <TableFilters filters={filters}/>
            }

            <Table classList={classList}>
                <Thead headers={thead}/>
                <Tbody disabled={disabled} rows={tbody} >
                    {children}
                </Tbody>
            </Table>

            {pagination && pagination.active &&
                <div className="row mt-4 mb-4">
                    <div className="col-11">
                        <Pagination 
                            activePage={pagination.currentPage + 1}
                            itemsCountPerPage={pagination.size}
                            totalItemsCount={pagination.totalItems}
                            pageRangeDisplayed={15}
                            activeLinkClass='active'
                            firstPageText={<i className='fa fa-angle-double-left'></i>}
                            prevPageText={<i className='fa fa-angle-left'></i>}
                            lastPageText={<i className='fa fa-angle-double-right'></i>}
                            nextPageText={<i className='fa fa-angle-right'></i>}
                            onChange={(page) => pagination.handlePageChange(pagination.size, page, pagination.searchQuery)}
                        />
                    </div>
                    <div className="col-1">
                        <SelectField name="items-per-page"
                            options={[{value:15, text: "15"}, {value:30, text: "30"}, {value:50, text: "50"}]}
                            label={pagination.size}
                            value={pagination.size}
                            callBack={(event) => pagination.handlePageChange(event.target.value, (pagination.currentPage + 1), pagination.searchQuery)}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

TableBuilder.propTypes = {
    children: PropTypes.any,
    tableData: PropTypes.object,
    classList: PropTypes.string
}

export default TableBuilder