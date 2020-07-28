import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

import ButtonLink from './components/Button Link';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="logo" src={logo} alt="Aluraflix" />
      </a>

      <Button as="a" className="ButtonLink">
        Testjrowaigdasf
      </Button>
    </nav>
  );
}

export default Menu;
