import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';

import kriptoLogo from '../../assets/kriptonLogo.png';

import { Container, Content, Background, AnimationForm } from './styles';

import Input from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digíte um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      const { email, password } = data;

      await signIn({
        email,
        password,
      });

      history.push('/home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      alert('Credenciais incorretas, tente novamente!');
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
