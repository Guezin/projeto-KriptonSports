import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogOut, FiMail } from 'react-icons/fi';
import { BeatLoader } from 'react-spinners';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, BackToSignIn } from './styles';

interface IFormSubmitData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const { loading, forgotPassword } = useAuth();

  const handleSubmit = useCallback(
    async ({ email }: IFormSubmitData) => {
      await forgotPassword(email);
    },
    [forgotPassword]
  );

  return (
    <Container>
      <img src={kriptonLogo} alt="Kripton Sports Logo" />

      <fieldset>
        <legend>Recuperar senha</legend>

        <Form onSubmit={handleSubmit}>
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">
            {loading ? (
              <BeatLoader
                css="display: block; margin: 0 auto;"
                size={8}
                color={'#fff'}
                loading={loading}
              />
            ) : (
              'Recuperar'
            )}
          </Button>
        </Form>
      </fieldset>

      <BackToSignIn>
        <FiLogOut size={20} color="#fff" />
        <Link to="/">Voltar para logon</Link>
      </BackToSignIn>
    </Container>
  );
};

export default ForgotPassword;
