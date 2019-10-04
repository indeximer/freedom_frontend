import React, { Component } from "react"

//components
import { CheckboxField } from '../../components/common/form'

class Filters extends Component {

    switchFields = (filter, input) => {
        switch(filter.type){
            case 'boolean':
                return <CheckboxField 
                    label={filter.label}
                    id={filter.name}
                    name={filter.name}
                    value={input.value}
                    checked={this.isChecked(input,filter)}
                    handleChange={(event) => this.handleChange(event, input, filter)} />

            case 'one_of_list':
                return (
                    <div className="form-group checkbox-group">
                        <label>{filter.label}</label>
                        {filter.items.map((item, index) => (
                           <CheckboxField
                                key={index}
                                label={item.label}
                                id={item.value}
                                name={item.value}
                                value={input.value}
                                checked={this.isChecked(input,item)}
                                handleChange={(event) => this.handleChange(event, input, item)} />
                        ))}
                    </div>
                )
            default:
                break
        }
    }

    isChecked = (input, filter) => {
        let checked = input.value.filter((value) => value.values[filter.name] === filter.value)

        checked = checked.length > 0 ? true : false
        return checked
    }

    handleChange = (event, input, filter) => {
        
        let newValue = [...input.value]

        const filterValue = {
            values:{
                [filter.name]:filter.value
            }
        }
        if(event.target.checked) {
            newValue.push(filterValue);
        } else {
            newValue = newValue.filter(item => item.values[filter.name] !== filter.value)
        }

        return input.onChange(newValue);
    }

    render() {
        const { input, filters } = this.props

        return(
            <div className="row">
                {filters.map((filters, index) =>(
                    <div className="col-auto mb-4" key={index}>
                        {this.switchFields(filters, input)}
                    </div>
                ))}
            </div>
        )
    }
}

export default Filters