import React from 'react';
import { FiCamera } from 'react-icons/fi';

import TopBarLogged from '../../components/TopBarLogged';

import { Content, Header } from './styles';

export const Profile: React.FC = () => (
  <>
    <TopBarLogged />
    <Header>
      <div>
        <FiCamera />
      </div>

      <div>
        <h1>User name</h1>
        <h3>Occupation</h3>
      </div>
    </Header>
    <Content>
      <div>
        <a href="/user/profile">Minhas Informacoes</a>
        <a href="/user/profile">Meus Certificados</a>
        <a href="/user/profile">Redes Sociais</a>
        <a href="/user/profile">Historico de eventos</a>
        <a href="/user/profile">Meus Ingressos</a>
      </div>
      <div>
        <img src="#" alt="Imagem de Apresentacao" />
      </div>
    </Content>
  </>
);

export default Profile;
