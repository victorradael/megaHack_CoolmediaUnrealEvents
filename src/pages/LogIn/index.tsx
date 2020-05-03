import React from 'react';
import logo from '../../images/logo.svg';
import girl from '../../images/girl.svg';
import imageEx from '../../images/imgex.jpg';
import {
  TopBar,
  Header,
  ContentLeft,
  ContentRight,
  CreateEvent,
  Footer,
} from './styles';

const LogIn: React.FC = () => (
  <>
    <TopBar>
      <img src={logo} alt="" />
      <div>
        <a href="/">Eventos</a>
        <a href="/">Como funciona?</a>
        <a href="/">Download</a>
        <a href="/">Ajuda</a>
        <button type="button">Criar Live</button>
        <button type="button">LogIn</button>
      </div>
    </TopBar>
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

export default LogIn;
