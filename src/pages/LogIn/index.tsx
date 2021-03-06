import React from 'react';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

import Input from '../../components/Input';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const Register: React.FC = () => (
  <>
    <TopBar />
    <Container>
      <form>
        <h1>Entre na sua conta</h1>

        <p>E-mail: </p>
        <Input name="email" icon={FiMail} placeholder="Digite seu e-mail" />
        <p>Senha: </p>
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Digite sua senha"
        />

        <div>
          <a href="/">
            <FiArrowRight size={40} />
            Entrar
          </a>
        </div>

        <h5>
          Nao tenho conta! <a href="/register">Cadastrar</a>
        </h5>
      </form>
    </Container>
  </>
);

export default Register;
