import React, { Component } from 'react'

//components
import Main from '../../components/layout/Main'
import TechniqueForm from './TechniqueForm'

class EditTechnique extends Component {

  render() {
    return (
      <Main active="techniques-add" pageTitle="Editar Técninca">
        <TechniqueForm />
      </Main>
    )
  }
}
  
export default EditTechnique