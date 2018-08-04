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
    query:'',
    effect:0,
    technique: {
      name:'',
      category:'',
      effect:0,
      form:0,
      area:0,
      duration:0,
      execution:0,
      restriction:0,
      difficulty:0,
      description:''
    }
  }

  coponentDidMount(){
    this.updateDifficulty();
  }

  updateDifficulty = () =>{
    const totalDifficulty = this.state.technique.effect + this.state.technique.form + this.state.technique.area + this.state.technique.duration + this.state.technique.execution + this.state.technique.restriction;
    let technique = {...this.state.technique}
    technique.difficulty = totalDifficulty;
    this.setState({technique:technique});
  }

  onChangeSlider = (value, category) => {
    let stateCopy = {...this.state}
    stateCopy.technique[category] = value;
    this.setState(stateCopy);

    this.updateDifficulty();
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

                        <RangeInput label="Efeito" name="effect" min={0} max={36} step={3} onSlide={this.onChangeSlider} />

                        <RangeInput label="Forma" name="form" min={0} max={12} step={3} onSlide={this.onChangeSlider} />

                        <RangeInput label="Area" name="area" min={0} max={12} step={3} onSlide={this.onChangeSlider} />

                        <RangeInput label="Duração" name="duration" min={0} max={15} step={3} onSlide={this.onChangeSlider} />

                        <RangeInput label="Execução" name="execution" min={-12} max={6} step={3} onSlide={this.onChangeSlider} />

                        <RangeInput label="Restrição" name="restriction" min={-6} max={0} step={3} onSlide={this.onChangeSlider} />

                        <div className="difficulty-field">
                          <Input s={4} m={1} type="text" id="difficulty" name="difficulty" label="Dificuldade" value={this.state.technique.difficulty} disabled />
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