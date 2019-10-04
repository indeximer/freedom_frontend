import React, { Component } from 'react'
import Button from '../Button'

class SearchBar extends Component{
    state = {
        param: ''
    }

    updateParam = (value) => {
        this.setState({param: value})
    }

    render(){
        const { handleSearch } = this.props
        const { param } = this.state

        return (
            <div className="col">
                <div className="search-input">
                    <form onSubmit={(e) => handleSearch(e, param)}>
                        <input
                            onChange={e => this.updateParam(e.target.value)}
                            className="form-control"
                            type="text"
                            placeholder="Buscar..." />
                        <Button classList="btn-red inverse" icon="fa fa-search" type="submit">buscar</Button>
                    </form>                
                </div>
            </div>
        )
    }    
}

export default SearchBar