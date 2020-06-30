import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';

import { Container, Content } from './styles';

interface IFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        const { name, email, old_password, password } = data;

        const updatedUser = Object.assign(data, {
          name,
          email,
          old_password,
          password,
        });

        const response = await api.put('/profile', updatedUser);

        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Perfil atualizado',
          description: 'Perfil atualizado com sucesso!',
        });

        history.push('/home');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao atualizar perfil',
          description: 'Erro na atualização do perfil, tente novamente!',
        });
      }
    },
    [history, updateUser, addToast]
  );

  return (
    <Container>
      <header>
        <Link to="/home">
          <FiArrowLeft size={26} />
        </Link>
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
            alt="Avatar Usuario"
          />
        </div>
      </header>
      <Content>
        <Form
          initialData={{ name: user.name, email: user.email }}
          onSubmit={handleSubmit}
        >
          <h1>Meu Perfil</h1>

          <Input type="email" name="email" icon={FiUser} placeholder="E-mail" />
          <Input type="text" name="name" icon={FiUser} placeholder="Nome" />
          <Input
            containerStyle={{ marginTop: 36 }}
            type="password"
            name="old_password"
            icon={FiLock}
            placeholder="Senha atual"
          />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Nova senha"
          />
          <Input
            type="password"
            name="password_confirmation"
            icon={FiLock}
            placeholder="Confirmação de senha"
          />

          <button type="submit">Atualizar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
