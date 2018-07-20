import React, { Component } from 'react';
import {Button, SideNav, SideNavItem} from 'react-materialize';
import logo from '../img/logo.png';

class Menu extends Component {
  render() {
    return (
        <SideNav
            id='nav-mobile'
            fixed
            trigger={<Button icon='menu' flat></Button>}
            options={{ closeOnClick: true }}
        >
            <SideNavItem className="mt-20" subheader><img src={logo} alt="Freedom RPG App"/></SideNavItem>
            <SideNavItem divider />
            <SideNavItem className="active" href='/ListaHabilidades'>Lista de Habilidades</SideNavItem>
            <SideNavItem href='/CriarHabilidade'>Criar Habilidade</SideNavItem>
            <SideNavItem href='/ListaPersonagens'>Lista de Personagens</SideNavItem>
            <SideNavItem href='/CriarPersonagem'>Criar Personagem</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Indeximer</SideNavItem>
            <SideNavItem href='/AlterarSenha' icon='lock'>Alterar senha</SideNavItem>
            <SideNavItem href='/Logout' icon='exit_to_app'>Sair</SideNavItem>
        </SideNav>
    );
  }
}

export default Menu;