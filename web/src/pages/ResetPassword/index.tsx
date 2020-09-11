import React, { useCallback } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogOut, FiLock } from 'react-icons/fi';
import { BeatLoader } from 'react-spinners';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import kriptonLogo from '../../assets/kripton-logo.png';

import { Container, BackToSignIn } from './styles';

interface IFormSubmitData {
  password: string;
}

const ResetPassword: React.FC = () => {
  const { loading, resetPassword } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ password }: IFormSubmitData) => {
      const token = location.search.replace('?token=', '');

      await resetPassword(token, password);

      history.push('/');
    },
    [resetPassword, location.search, history]
  );

  return (
    <Container>
      <img src={kriptonLogo} alt="Kripton Sports Logo" />

      <fieldset>
        <legend>Atualizar senha</legend>

        <Form onSubmit={handleSubmit}>
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Nova senha"
          />
          <Input
            name="password_confirmation"
            type="password"
            icon={FiLock}
            placeholder="Confirmar senha"
          />

          <Button type="submit">
            {loading ? (
              <BeatLoader
                css="display: block; margin: 0 auto;"
                size={8}
                color={'#fff'}
                loading={loading}
              />
            ) : (
              'Atualizar'
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

export default ResetPassword;
