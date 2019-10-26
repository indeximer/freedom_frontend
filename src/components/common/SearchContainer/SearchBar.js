import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { TextField  } from 'rmwc'
//import PropTypes from 'prop-types'

const SearchBar = ({ handleChange, query }) => {
    return (
        <DebounceInput
            className="search-input w-100"
            element={TextField}
            icon="search"
            trailingIcon={{
                icon: 'close',
                tabIndex: 0,
                onClick: () => handleChange('')
            }}
            value={query}
            label="Procurar..."
            debounceTimeout={300}
            onChange={event => handleChange(event.target.value, 'name')} />
    )
}

export default SearchBar