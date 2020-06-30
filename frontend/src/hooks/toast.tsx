import React, { useContext, createContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

import { IToastMessage } from '../components/ToastContainer/Toast';

const ToastContext = createContext({} as IToastContextProps);

interface IToastContextProps {
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: IToastMessage) => {
      const data = {
        id: uuid(),
        type,
        title,
        description,
      };

      setMessage([...message, data]);
    },
    [message]
  );

  const removeToast = useCallback((id: string) => {
    setMessage(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={message} />
    </ToastContext.Provider>
  );
};

const useToast = (): IToastContextProps => {
  const context = useContext(ToastContext);

  return context;
};

export { ToastProvider, useToast };
