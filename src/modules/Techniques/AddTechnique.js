import React, { Component } from 'react'

//components
import Main from '../../components/layout/Main'
import TechniqueForm from './TechniqueForm'

class AddTechnique extends Component {

  render() {
    return (
      <Main active="techniques-add" pageTitle="Adicionar Técninca">
        <TechniqueForm />
      </Main>
    )
  }
}
  
export default AddTechnique