import React, { Component } from 'react';
import {Row, Col, Card, Input, Button, Icon} from 'react-materialize';
import logo from '../img/logo.png';
import { withRouter } from "react-router-dom";

class Register extends Component {
  handleRegister = (e) => {
    e.preventDefault();
    this.props.history.push('/techniques');
  }

  render() {
    return (
      <div className="container">
        <Row className="mb-0">
          <Col className="login-box">
            <Card className="grey lighten-4 mt-0 mb-0">
              <img src={logo} alt="Freedom RPG App"/>
              <h1>Register:</h1>
              <Row className="mb-0">
                <form className="form-login" id="form_login">
                  <Input s={12} label="Name" name="email" id="email" type="email" validate><Icon>account_circle</Icon></Input>
                  <Input s={12} label="E-mail" name="email" id="email" type="email" validate><Icon>account_circle</Icon></Input>
                  <Input s={12} label="Password" name="password" id="password" type="password" validate><Icon>lock</Icon></Input>
                  <Col s={12}>
                    <Button onClick={(event) => this.handleRegister(event)} className="col s12 btn btn-large" large>Register</Button>
                  </Col>
                </form>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Register);
