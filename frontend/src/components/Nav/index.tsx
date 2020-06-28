import React, { useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

import { useSelectedNav } from '../../hooks/nav';

import { Container } from './styles';

interface NavProps {
  name: string;
  href: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Nav: React.FC<NavProps> = ({ name, icon: Icon, href }) => {
  const { selectedNav, setSelectedNav } = useSelectedNav();

  const handleSelectedNav = useCallback(
    nameNav => {
      setSelectedNav(nameNav);
    },
    [setSelectedNav]
  );

  return (
    <Container selected={selectedNav === name}>
      <Link to={href} onClick={() => handleSelectedNav(name)}>
        <p>{name}</p>

        <Icon size={20} />
      </Link>
    </Container>
  );
};

export default Nav;
