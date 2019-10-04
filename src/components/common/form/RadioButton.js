import React from 'react'

const RadioButton = ({ fields }) => {
    return fields.map((v, i) => {
        return (
            <div className="col-sm-8 radio-form" key={i}>
                <div className="custom-control custom-radio custom-control-inline w-100">
                    <label className={`custom-control-label ${v.checked ? 'checked': ''}`} htmlFor={v.id}>{v.label}</label>    
                    <input type="radio"
                        htmlFor={v.id} 
                        id={v.id} 
                        name={v.name} 
                        className="custom-control-input" 
                        onChange={v.onChange} 
                        value={v.value} 
                        checked={v.checked}/>
                </div>
            </div>
        )
    })
}

export default RadioButton