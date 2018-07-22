import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Col,Input} from 'react-materialize';


class RangeInput extends Component {
  static propTypes = {
    label : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    max : PropTypes.number.isRequired,
    min : PropTypes.number.isRequired,
    step : PropTypes.number.isRequired,
    onSlide: PropTypes.func.isRequired
  }

  state = {
    value:0
  }

  componentDidMount(){
    let initialValue = (this.props.min + this.props.max) / 2;
    this.setState({value: initialValue});
  }

  updateValue = (event) => {
      this.setState({value:event.target.value});
      this.props.onSlide(parseInt(event.target.value,10), event.target.id)
  }

  render() {
    const {label, name, max, min, step} = this.props;
    const value = this.state.value;

    return (
        <div className="range-container">
            <Col s={12} m={1}>
                <label>{label}</label>
            </Col>
            <Col s={10} m={10}>
                <p className="range-field">
                    <input 
                        type="range"
                        id={name}
                        name={name}
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(event) => this.updateValue(event)}
                    />
                </p>
            </Col>
            <Input 
                className="center-align"
                s={2}
                m={1}
                value={value}
                disabled
            />
        </div>
    );
  }
}
  
export default RangeInput;