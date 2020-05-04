import React from 'react';
import { FiMap } from 'react-icons/fi';

import TopBar from '../../components/TopBar';
import imgEx from '../../images/ex2.svg';

import { Container } from './styles';

const Register: React.FC = () => (
  <>
    <TopBar />
    <Container>
      <form>
        <p>Nome do evento: </p>
        <input type="text" />

        <p>Data: </p>
        <input type="date" name="date" />

        <p>Horario: </p>
        <input type="time" name="time" />

        <p>Descricao: </p>
        <textarea name="description" />
        <p>Tipo:</p>
        <select name="value">
          <option value="Todas Gratis">Todas as Palestras Gratis</option>
          <option value="Todas Pagas">Todas as Palestras Pagas</option>
          <option value="Pagas e Gratis">
            Algumas palestras Gratis outras Pagas
          </option>
        </select>

        <div>
          <a href="/">
            <FiMap size={40} />
            Cadastrar Evento
          </a>
        </div>
        <h6>
          Ao clicar em cadastrar você concorda com os{' '}
          <strong>Termos de Política e Privacidade</strong>
        </h6>
      </form>
      <section>
        <img src={imgEx} alt="" />
      </section>
    </Container>
  </>
);

export default Register;
