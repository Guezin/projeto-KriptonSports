import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogOut, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, BackToSignIn } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={kriptonLogo} alt="Kripton Sports Logo" />

      <fieldset>
        <h1>Recuperar senha</h1>

        <Form onSubmit={() => {}}>
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Recuperar</Button>
        </Form>
      </fieldset>

      <BackToSignIn>
        <FiLogOut size={20} color="#fff" />
        <Link to="/">Voltar para logon</Link>
      </BackToSignIn>
    </Container>
  );
};

export default SignIn;
