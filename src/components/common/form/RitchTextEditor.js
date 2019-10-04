import React from 'react'
import ReactQuill from 'react-quill'

const RitchTextEditor = (props) => {
    
    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['link'],
          ['clean']
        ],
      }
    
    const formats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link'
    ]

    const { touched, error } = props.meta
    
    return (
        <div className="ritch-text-wrapper mb-4">
            <label>{props.label}</label>              
            <ReactQuill 
                {...props.input}
                onChange={(newValue, delta, source) => {
                    if (source === 'user') {
                      props.input.onChange(newValue);
                    }
                }}
                onBlur={(range, source, quill) => {
                    props.input.onBlur(quill.getHTML());
                }}
                modules={modules}
                formats={formats}
                readOnly={props.disabled}
                className={props.disabled ? 'disabled' :''}
            />

            {touched &&
                (error && <span className='error'>{error}</span>)
            }
        </div>
    )
}

export default RitchTextEditor