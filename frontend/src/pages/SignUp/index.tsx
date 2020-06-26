import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import kriptoLogo from '../../assets/kriptonLogo.png';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import createUser from '../../utils/createUser';

import Input from '../../components/Input';

import { Container, Content, Background, AnimationForm } from './styles';

interface IUserData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: IUserData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digíte um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string()
          .min(6, 'Minímo 6 digítos')
          .required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      // await createUser(data);
      const { name, email, password } = data;

      await api.post('/users', {
        name,
        email,
        password,
      });

      alert('Usuário cadastrado com sucesso!');

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      alert(err);
    }
  }, []);

  return (
    <Container>
      <Background>
        <img src={kriptoLogo} alt="Kripton Sports" />
      </Background>

      <Content>
        <AnimationForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
