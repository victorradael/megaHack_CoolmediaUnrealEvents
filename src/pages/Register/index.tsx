import React from 'react';
import { FiAtSign, FiMail, FiLock, FiUserCheck } from 'react-icons/fi';

import Input from '../../components/Input';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const Register: React.FC = () => (
  <>
    <TopBar />
    <Container>
      <form>
        <h1>Cadastre-se ja!</h1>

        <p>Nome: </p>
        <Input
          name="name"
          icon={FiAtSign}
          type="text"
          placeholder="Digite seu nome completo"
        />
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
            <FiUserCheck size={40} />
            Criar Conta
          </a>
        </div>
        <h6>
          Ao clicar em cadastrar você concorda com os{' '}
          <strong>Termos de Política e Privacidade</strong>
        </h6>

        <h5>
          Ja tenho conta! <a href="/login">Entrar</a>
        </h5>
      </form>
    </Container>
  </>
);

export default Register;
