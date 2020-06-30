import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';

import { useToast } from '../../../hooks/toast';

import { Container } from './styles';

export interface IToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description: string;
}

interface IToastProps {
  message: IToastMessage;
  style: object;
}

const iconTypes = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<IToastProps> = ({ style, message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      removeToast(message.id);
    }, 3000);

    return () => clearInterval(timer);
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} style={style}>
      {iconTypes[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>
    </Container>
  );
};

export default Toast;
