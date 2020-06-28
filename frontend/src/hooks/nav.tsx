import React, { useContext, createContext, useState } from 'react';

const NavContext = createContext({} as INavContextData);

interface INavContextData {
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}

const NavProvider: React.FC = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState('Home');

  return (
    <NavContext.Provider value={{ selectedNav, setSelectedNav }}>
      {children}
    </NavContext.Provider>
  );
};

const useSelectedNav = (): INavContextData => {
  const context = useContext(NavContext);

  return context;
};

export { NavProvider, useSelectedNav };
