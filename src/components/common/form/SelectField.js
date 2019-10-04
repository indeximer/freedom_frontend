import React, {Component} from 'react'

class SelectField extends Component{
    // propTypes = {
    //     name:PropTypes.string
    // }

    state = {selectedOpt:''}

    componentDidMount(){
        this.setSelectVal(this.props.options[0].text)
    }

    setSelectVal = (val) => {
        const newState = this.state
        newState.selectedOpt = val
        this.setState(newState)
    }

    handleChange = (e , cb = () => null) => {
        const index = e.target.selectedIndex
        const text = e.target[index].text
        this.setSelectVal(text)

        cb(e)
    }

    customChange = (input, event) => {
        const index = event.target.selectedIndex
        const text = event.target.options[index].text

        this.setState({selectedOpt: text})

        return input.onChange(event.target.value)
    }

    verifyConnectedSelect = (classList, input, name, options, connected, callBack, value, label, disabled) => {
        if(connected){
            let labelText = options.filter(option => option.value === input.value)
            if(labelText[0]){
                labelText = labelText[0].text
            }else{
                labelText = options[0].text
            }

            return(
                <div className={`select-custom ${classList} ${disabled ? 'disabled':''}`}>
                    <label>{labelText}</label>
                    <select name={input.name} disabled={disabled} value={input.value} onChange={(event) => this.customChange(input, event)}>
                        {options.map((option, index) => (
                            <option value={option.value} key={index}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
            )
        }else{
            return(
                <div className={`select-custom ${classList}`}>
                    <label>{label || this.state.selectedOpt}</label>
                    <select name={name} disabled={disabled} value={value} onChange={((event) => this.handleChange(event, callBack))}>
                        {options.map((option, index) =>(
                            <option key={index} value={option.value}>{option.text}</option>
                        ))}
                    </select>
                </div>
            )
        }
    }

    render(){
        const { classList, input, name, options, connected, callBack, value, label, disabled = false } = this.props
        return(
            this.verifyConnectedSelect(classList, input, name, options, connected, callBack, value, label, disabled)
        )
    }
}

export default SelectField