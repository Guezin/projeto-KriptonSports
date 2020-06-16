import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';

import kriptoLogo from '../../assets/kriptonLogo.png';

import { Container, Content, Background, AnimationForm } from './styles';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <AnimationForm>
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input
              type="text"
              name="email"
              icon={FiUser}
              placeholder="E-mail"
            />
            <Input
              type="password"
              name="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>

            <a href="/">Esqueci minha senha</a>
          </Form>

          <Link to="/sign-up">
            <FiLogIn size={20} />
            Criar conta
          </Link>
        </AnimationForm>
      </Content>

      <Background>
        <img src={kriptoLogo} alt="Kripton Sports" />
      </Background>
    </Container>
  );
};

export default SignIn;
