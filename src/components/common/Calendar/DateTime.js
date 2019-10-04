import React, { Component } from 'react'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

class DateTime extends Component {
    state = {dateTime: [new Date(), new Date()]}

    onChange = (input,date) => {
        input.onChange(date)
    }

    render(){
        const { label, input } = this.props

        return (
            <div className="form-group mb-4">
                <label>{label}</label>
                <DateTimeRangePicker
                    className="range-date-time ml-3"
                    disableClock={true}
                    onChange={(date) => this.onChange(input, date)}
                    value={input.value}
                    calendarIcon={<i className="icon icon-calendario color-red"></i>}
                    clearIcon={<i className="icon icon-exclude color-red"></i>}
                />
            </div>
        )
    }
}

export default DateTime