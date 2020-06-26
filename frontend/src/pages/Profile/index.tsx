import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container, Content } from './styles';

const Profile: React.FC = () => {
  const handleSubmit = useCallback(data => {}, []);

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
        <Form onSubmit={handleSubmit}>
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
            name="confirmation_password"
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
