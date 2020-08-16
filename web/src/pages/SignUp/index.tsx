import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogOut, FiUser, FiMail, FiLock } from 'react-icons/fi';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, BackToSignIn } from './styles';

interface IFormSubmitData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ name, email, password }: IFormSubmitData) => {
      try {
        await api.post('/users', {
          name,
          email,
          password,
        });

        history.push('/');
      } catch {
        alert('Erro ao criar cadastro, verifique os dados!');
      }
    },
    [history]
  );

  return (
    <Container>
      <img src={kriptonLogo} alt="Kripton Sports Logo" />

      <fieldset>
        <h1>Faça seu cadastro</h1>

        <Form onSubmit={handleSubmit}>
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
        <FiLogOut size={20} color="#fff" />
        <Link to="/">Voltar para logon</Link>
      </BackToSignIn>
    </Container>
  );
};

export default SignUp;
