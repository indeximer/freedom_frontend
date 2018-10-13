import React from 'react';
import {Button, SideNav, SideNavItem} from 'react-materialize';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';

const Menu = ({ active }) => {

    return (
        <SideNav
            id='nav-mobile'
            fixed
            trigger={<Button icon='menu' flat></Button>}
            options={{ closeOnClick: false }} >

            <SideNavItem className="mt-20" href='/techniques'><img src={logo} alt="Freedom RPG App"/></SideNavItem>
            <SideNavItem divider />
            <SideNavItem className={active === 'techniques' ? 'active':''} href='/techniques'>Lista de Técnicas</SideNavItem>
            <SideNavItem className={active === 'techniques-add' ? 'active':''} href='/techniques/add'>Adicionar Técnicas</SideNavItem>
            <SideNavItem className={active === 'characters' ? 'active':''} href='/characters'>Meus Personagens</SideNavItem>
            <SideNavItem className={active === 'characters-add' ?'active':''} href='/characters/add'>Criar Personagem</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Indeximer</SideNavItem>
            <SideNavItem href='/AlterarSenha' icon='lock'>Alterar senha</SideNavItem>
            <SideNavItem href='/Logout' icon='exit_to_app'>Sair</SideNavItem>
        </SideNav>
    );
}

Menu.propTypes = {
    active : PropTypes.string
}

export default Menu;
