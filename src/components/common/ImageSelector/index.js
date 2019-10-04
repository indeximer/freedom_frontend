import React, {Component} from 'react'
//import PropTypes from 'prop-types'

import maquina from '../../../assets/img/aluguel3.png'

class ImageSelector extends Component{
    state = {
        selectedImage:''
    }

    render(){
        return(
            <div className="image-selector mb-4">
                <div className="fake-radio">
                    <img src={maquina} alt="Imagem máquininha" />
                </div>
                <div className="fake-radio">
                    <img src={maquina} alt="Imagem máquininha" />
                </div>
                <div className="fake-radio">
                    <img src={maquina} alt="Imagem máquininha" />
                </div>
                <div className="fake-radio">
                    <img src={maquina} alt="Imagem máquininha" />
                </div>
                <div className="fake-radio">
                    <img src={maquina} alt="Imagem máquininha" />
                </div>
            </div>
        )
    }
}

export default ImageSelector