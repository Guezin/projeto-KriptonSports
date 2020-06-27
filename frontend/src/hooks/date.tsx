import React, { useContext, createContext, useState, useEffect } from 'react';
import { format } from 'date-fns';

const DateContext = createContext({} as IDateContextData);

interface IDateContextData {
  date: string;
}

const DateProvider: React.FC = ({ children }) => {
  const [date, _] = useState(() => {
    return format(new Date(), "dd'/'MM'/'yyyy");
  });

  return (
    <DateContext.Provider value={{ date }}>{children}</DateContext.Provider>
  );
};

const useDate = (): IDateContextData => {
  const context = useContext(DateContext);

  return context;
};

export { DateProvider, useDate };
