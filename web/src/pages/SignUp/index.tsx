import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogOut, FiUser, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, BackToSignIn } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <img src={kriptonLogo} alt="Kripton Sports Logo" />

      <fieldset>
        <h1>Faça seu cadastro</h1>

        <Form onSubmit={() => {}}>
          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </fieldset>

      <BackToSignIn>
        <Link to="/">
          <FiLogOut size={20} color="#fff" />
          Voltar para logon
        </Link>
      </BackToSignIn>
    </Container>
  );
};

export default SignUp;
