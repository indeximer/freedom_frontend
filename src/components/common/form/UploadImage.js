import React, {Component} from 'react'
import ReactDropzone from "react-dropzone"

class UploadImage extends Component {
    state = {
        files: [],
    }

    onDrop = (onUpload, input, files) => {
        this.setState({files})

        const reader = new FileReader()
        reader.onload = () => {
            const fileAsBinaryString = reader.result;
            onUpload(fileAsBinaryString, files[0].name, input)
        }
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')

        reader.readAsBinaryString(files[0])
    }
  
    render() {
        const { input, onUpload } = this.props
        const { touched, error } = this.props.meta
      return (
        <div className="mb-4">
            <ReactDropzone
            { ...input }
            className="img-dropzone"
            onDrop={(files) => this.onDrop(onUpload, input, files)}
            accept="image/jpeg,image/jpg,image/png"
            multiple={false}
            >
                <div>
                    Arraste seu arquivo para cá<br/>
                    <span className="btn btn-upload btn-small">Selecionar arquivo</span><br/>
                    <span className="max-size">Tamanho máximo: 2mb</span>
                </div>
            </ReactDropzone>

            {this.state.files.length > 0 &&
                <div className="img-upload-preview">
                    {this.state.files.map((file) => (
                    <img
                        alt="Preview"
                        key={file.preview}
                        src={file.preview}
                    />
                    ))}
                </div>
            }

            {this.state.files.length === 0 && input.value &&
                <div className="img-upload-preview">

                    <img
                        alt="Preview"
                        src={input.value}
                    />
                </div>
            }

            {touched &&
                (error && <span className='error'>{error}</span>)
            }
        </div>
      );
    }
  }

export default UploadImage;