import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import { Bar } from './styles';

const TopBar: React.FC = () => (
  <Bar>
    <a href="/">
      <img src={logo} alt="" />
    </a>
    <div>
      <a href="/events">Eventos</a>
      <a href="/">Como funciona?</a>
      <a href="/">Download</a>
      <a href="/">Ajuda</a>
      <button type="button">Criar Live</button>
      <Link to="/login">LogIn</Link>
    </div>
  </Bar>
);

export default TopBar;
