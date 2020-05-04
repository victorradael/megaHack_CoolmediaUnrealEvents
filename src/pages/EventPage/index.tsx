import React from 'react';

import imageEx from '../../images/auditorio.svg';
import { Header, Content, Counter } from './styles';

import TopBarLogged from '../../components/TopBarLogged';

const HomePage: React.FC = () => (
  <>
    <TopBarLogged />
    <Header>
      <div>
        <img src={imageEx} alt="Imagem de Apresentacao" />
      </div>

      <h1>Como ganhar um hackathon de forma eficiente</h1>
    </Header>
    <Counter>
      <div>
        <h4>89</h4>
        <p>Inscritos</p>
      </div>

      <div>
        <h4>105</h4>
        <p>Interessados</p>
      </div>
    </Counter>
    <Content>
      <div>
        <a href="/eventPage">Meu Evento</a>
        <a href="/eventPage">Adicionar Palestrante</a>
        <a href="/eventPage">Visualizar Participantes</a>
        <a href="/eventPage">Estatistica do Evento</a>
      </div>
      <div>
        <img src="#" alt="Imagem de Apresentacao" />
      </div>
    </Content>
  </>
);

export default HomePage;
