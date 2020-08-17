import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiUser, FiLock, FiMail, FiArrowLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, GoToBack } from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  const handleGoToBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <header>
        <GoToBack type="button" onClick={handleGoToBack}>
          <FiArrowLeft size={20} color="#fff" />
        </GoToBack>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU"
          alt="Avatar usuario"
        />
      </header>

      <fieldset>
        <h1>Meu perfil</h1>

        <Form
          initialData={{
            email: user.email,
            name: user.name,
            surname: user.surname,
          }}
          onSubmit={() => {}}
        >
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
          <Input
            name="surname"
            type="text"
            icon={FiUser}
            placeholder="Sobrenome"
          />
          <Input
            name="old_password"
            type="text"
            icon={FiLock}
            placeholder="Senha atual"
            containerStyle={{
              marginTop: 32,
            }}
          />
          <Input
            name="password"
            type="text"
            icon={FiLock}
            placeholder="Nova senha"
          />
          <Input
            name="password_confirmation"
            type="text"
            icon={FiLock}
            placeholder="Confirmar senha"
          />

          <Button type="submit">Atualizar</Button>
        </Form>
      </fieldset>
    </Container>
  );
};

export default Profile;
