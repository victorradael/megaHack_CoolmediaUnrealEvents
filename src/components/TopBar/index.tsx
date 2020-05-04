import React from 'react';
import logo from '../../images/logo.svg';

import { Bar } from './styles';

const TopBar: React.FC = () => (
  <Bar>
    <img src={logo} alt="" />
    <div>
      <a href="/">Eventos</a>
      <a href="/">Como funciona?</a>
      <a href="/">Download</a>
      <a href="/">Ajuda</a>
      <button type="button">Criar Live</button>
      <button type="button">LogIn</button>
    </div>
  </Bar>
);

export default TopBar;
