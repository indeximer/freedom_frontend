import React from 'react'
import {DebounceInput} from 'react-debounce-input';
//import PropTypes from 'prop-types'

const SearchBar = ({handleChange}) => {
    return (
        <div className="col">
            <div className="search-input">
                <i className="fa fa-search"></i>
                <DebounceInput
                    className="form-control"
                    placeholder="Pesquisar"
                    debounceTimeout={300}
                    onChange={event => handleChange(event.target.value, 'name')} />
            </div>
        </div>
    )
}

export default SearchBar