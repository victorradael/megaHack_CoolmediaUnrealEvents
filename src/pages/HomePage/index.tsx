import React from 'react';
import girl from '../../images/girl.svg';
import imageEx from '../../images/imgex.jpg';
import {
  Header,
  ContentLeft,
  ContentRight,
  CreateEvent,
  Footer,
} from './styles';

import TopBar from '../../components/TopBar';

const HomePage: React.FC = () => (
  <>
    <TopBar />
    <Header>
      <div>
        <h1>Conecte-se ao mundo de forma diferente</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button type="button">Criar Evento</button>
      </div>
      <div>
        <img src={girl} alt="Imagem de Apresentacao" />
      </div>
    </Header>
    <ContentLeft>
      <div>
        <h2>Fazer Diferente</h2>
        <h3>Interagir nunca foi tao facil</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <img src={imageEx} alt="" />
      </div>
    </ContentLeft>
    <ContentRight>
      <div>
        <img src={imageEx} alt="" />
      </div>
      <div>
        <h2>Fazer Diferente</h2>
        <h3>Interagir nunca foi tao facil</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </ContentRight>
    <ContentLeft>
      <div>
        <h2>Fazer Diferente</h2>
        <h3>Interagir nunca foi tao facil</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <img src={imageEx} alt="" />
      </div>
    </ContentLeft>
    <ContentRight>
      <div>
        <img src={imageEx} alt="" />
      </div>
      <div>
        <h2>Fazer Diferente</h2>
        <h3>Interagir nunca foi tao facil</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </ContentRight>
    <CreateEvent>
      <h1>Crie seu evento!</h1>
      <button type="button">Criar</button>
    </CreateEvent>
    <Footer />
  </>
);

export default HomePage;
