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
  }

  state = {
    query:''
  }

  updateQuery = (newQuery) => {
      this.setState({query : newQuery });
  }

  render() {
    const {label, name, max, min, step} = this.props;

    let initialValue = (min + max) / 2;

    return (
        <div className="range-container">
            <Col s={12} m={1}>
                <label>{label}</label>
            </Col>
            <Col s={10} m={10}>
                <p className="range-field">
                    <input type="range" id={name} name={name} min={min} max={max} step={step} value={initialValue} />
                </p>
            </Col>
            <Input className="center-align" s={2} m={1} value={initialValue} disabled/>
        </div>
    );
  }
}
  
export default RangeInput;