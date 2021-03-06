import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, ForgotPassword, CreateAccount } from './styles';

interface IFormSubmitData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async ({ email, password }: IFormSubmitData) => {
      await signIn({ email, password });
    },
    [signIn]
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
          <FiLogIn size={20} color="#fff" />
          <Link to="/signup">Criar Conta</Link>
        </CreateAccount>
      </nav>
    </Container>
  );
};

export default SignIn;
