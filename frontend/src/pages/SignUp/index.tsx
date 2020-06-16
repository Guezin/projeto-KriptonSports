import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import kriptoLogo from '../../assets/kriptonLogo.png';

import Input from '../../components/Input';

import { Container, Content, Background, AnimationForm } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background>
        <img src={kriptoLogo} alt="Kripton Sports" />
      </Background>

      <Content>
        <AnimationForm>
          <Form onSubmit={handleSubmit}>
            <h1>Criar cadastro</h1>

            <Input type="text" name="name" icon={FiUser} placeholder="Nome" />
            <Input
              type="email"
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

            <button type="submit">Cadastrar</button>
          </Form>

          <Link to="/">
            <FiLogOut size={20} />
            Voltar para logon
          </Link>
        </AnimationForm>
      </Content>
    </Container>
  );
};

export default SignUp;
