import React, { Component } from 'react';
import {Row, Col, Card, Input, Button, Icon} from 'react-materialize';
import logo from './img/logo.png';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Row className="mb-0">
          <Col className="login-box">
            <Card className="grey lighten-4 mt-0 mb-0" actions={[<a href='cadastro'>Ainda não tem uma conta? Faça seu cadastro!</a>]}>
              <img src={logo} alt="Freedom RPG App"/>
              <Row className="mb-0">
                <form className="form-login" id="form_login">
                  <Input s={12} label="Usuário" name="usuario" id="usuario" validate><Icon>account_circle</Icon></Input>
                  <Input s={12} label="Senha" name="senha" id="senha" type="password" validate><Icon>lock</Icon></Input>
                  <Col s={12}>
                    <Button className="col s12" large>Entrar</Button>
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

export default Login;
