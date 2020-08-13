import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, ForgotPassword, CreateAccount } from './styles';

interface IFormSubmitData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    (data: IFormSubmitData) => {
      history.push('/home');
    },
    [history]
  );

  return (
    <Container>
      <img src={kriptonLogo} alt="Kripton Sports Logo" />

      <fieldset>
        <h1>Faça seu logon</h1>

        <Form onSubmit={handleSubmit}>
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </fieldset>

      <nav>
        <ForgotPassword>
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </ForgotPassword>

        <CreateAccount>
          <Link to="/signup">
            <FiLogIn size={20} color="#fff" />
            Criar Conta
          </Link>
        </CreateAccount>
      </nav>
    </Container>
  );
};

export default SignIn;
