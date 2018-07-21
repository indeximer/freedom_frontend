import React, { Component } from 'react';
import {Row, Col, Card, Input, Button, Icon} from 'react-materialize';
import logo from '../../img/logo.png';
import { withRouter, Link } from "react-router-dom";

class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.history.push('/techniques');
  }

  render() {
    return (
      <div className="container">
        <Row className="mb-0">
          <Col className="login-box text-center">
            <img src={logo} alt="Freedom RPG App Logo" className="mb-15"/>
            <Card className="grey lighten-4 mt-0 mb-0 text-left" title="Login:" actions={[<Link to='/register'>Ainda não tem uma conta? Faça seu cadastro!</Link>]}>
              <Row className="mb-0">
                <form className="form-login" id="form_login">
                  <Input s={12} label="E-mail" name="email" id="email" type="email" validate><Icon>account_circle</Icon></Input>
                  <Input s={12} label="Senha" name="password" id="password" type="password" validate><Icon>lock</Icon></Input>
                  <Col s={12}>
                    <Button onClick={(event) => this.handleLogin(event)} className="col s12 btn btn-large" large>Entrar</Button>
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

export default withRouter(Login);
