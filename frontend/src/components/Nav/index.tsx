import React from 'react';
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface NavProps {
  name: string;
  icon: React.ComponentType<IconBaseProps>
}

const Nav: React.FC<NavProps> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <a href="#">
        <p>{name}</p>

        <Icon size={20} />
      </a>
    </Container>
  );
}

export default Nav;
