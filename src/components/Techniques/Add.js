import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import PropTypes from 'prop-types';
import {Section, Container, Row, Col, Card, Button, Input,Icon } from 'react-materialize';
import RangeInput from '../RangeInput';
import {Link} from 'react-router-dom';


class AddTechniques extends Component {
  static propTypes = {
    techniques : PropTypes.array.isRequired
  }


  state = {
    query:''
  }

  updateQuery = (newQuery) => {
      this.setState({query : newQuery });
  }

  render() {
    return (
      <main>
        <PageHeader title="Adicionar Técninca"/>

        <Section>
            <Container>
              <Row>
                <Col s={12}>
                  <Card>
                    <form className="add-technique" id="add-technique" onSubmit={(event) => event.preventDefault()}>
                      <Row>
                        <Input s={12} m={6} type="text" id="name" name="name" label="Nome da Técnica"/>

                        <Input s={12} m={6} type="text" id="category" name="category" label="Categoria Técnica"/>

                        <RangeInput label="Efeito" name="effect" min={-12} max={12} step={3}  />

                        <RangeInput label="Forma" name="form" min={-12} max={12} step={3}  />

                        <RangeInput label="Area" name="area" min={-12} max={12} step={3}  />

                        <RangeInput label="Duração" name="duration" min={-12} max={12} step={3}  />

                        <RangeInput label="Execução" name="execution" min={-12} max={12} step={3}  />

                        <RangeInput label="Restrição" name="Restriction" min={-12} max={12} step={3}  />

                        <div className="difficulty-field">
                          <Input s={4} m={1} type="text" id="difficulty" name="difficulty" label="Dificuldade" defaultValue="0" disabled />
                        </div>
                        

                        <Input s={12} type="textarea" id="description" name="description" label="Descrição da técnica (informe a restrição, se houver)"/>
                        
                        <Col s={12} className="right-align">
                          <Link className="btn btn-large red darken-1 mr-15" to="/techniques">Cancelar</Link>
                          <Button large>Salvar<Icon left>save</Icon></Button>
                        </Col>
                      </Row>
                    </form>
                  </Card>
                </Col>
              </Row>
            </Container>
        </Section>
      </main>
    );
  }
}
  
export default AddTechniques;