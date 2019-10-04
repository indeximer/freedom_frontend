import React, { Component, Fragment } from 'react'
import ReactDropzone from "react-dropzone"
import papa from 'papaparse'

// components
import Button from '../Button'

class UploadCsv extends Component {
    state = {
        files: [],
    }

    onDrop = (files) => {
        this.setState({files})
    }

    handleSubmit = (onUpload, e) => {
        const { files } = this.state
        e.stopPropagation()
        papa.parse(files[0], {
            header: true,
            complete: (results) => {
                onUpload(results.data, e)
            }
        })
    }
  
    render() {
        const { onUpload, onDismiss } = this.props
      return (
        <div className="mb-4">
            <ReactDropzone
            className="img-dropzone"
            onDrop={(files) => this.onDrop(files)}
            //accept="text/csv"
            multiple={false}
            >
                <div className="dropzone-content">
                    Arraste seu arquivo CSV para cá<br/>
                    <span className="btn btn-upload btn-small">Selecionar arquivo</span><br/>
                    <span className="max-size">Tamanho máximo: 50 linhas</span>
                    {this.state.files.length > 0 &&
                        <div className="actions">
                            <Button onClick={(e) => this.handleSubmit(onUpload, e)} classList="btn-round-text green sm" ><i className="fa fa-check"></i><br/>enviar</Button>
                            <Button onClick={(e) => onDismiss(e)} classList="btn-round-text red sm" ><i className="icon icon-exclude"></i><br/>cancelar</Button>
                        </div>                    
                    }
                </div>
            </ReactDropzone>

            {this.state.files.length > 0 &&
                <div className="mt-2 text-center w-100">
                    {this.state.files.map((file) => (
                        <p key={file.preview}>{file.name}</p>
                    ))}
                </div>
            }
        </div>
      );
    }
  }

export default UploadCsv;