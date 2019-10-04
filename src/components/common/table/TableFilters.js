import React, {Component} from 'react'

//components
import SelectField from '../form/SelectField'

class TableFilter extends Component{

    render(){
        return(
            <div className="row justify-content-end">
                <div className="col-auto table-filters mb-2 ">

                    <label className="title">Filtros:</label>
                    <label>Tipo: </label>
                    <SelectField name="filter" options={this.props.filters}></SelectField>
                    <label>Resultados por página: </label>
                    <SelectField name="filter" options={[{value:10, text: "10"}, {value:20, text: "20"}, {value:30, text: "30"}]}></SelectField>

                </div>
            </div>
        )
    }
}

export default TableFilter