import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface NavProps {
  name: string;
  href: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Nav: React.FC<NavProps> = ({ name, icon: Icon, href }) => {
  return (
    <Container>
      <Link to={href}>
        <p>{name}</p>

        <Icon size={20} />
      </Link>
    </Container>
  );
};

export default Nav;
