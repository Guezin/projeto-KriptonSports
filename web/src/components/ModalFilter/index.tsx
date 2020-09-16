import React, { useState, useCallback, useMemo } from 'react';
import { FiX, FiCheck } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';

import { useFilter } from '../../hooks/filter';

import Modal from '../Modal';

import { Container, CloseModal, Separator, Content, CheckBox } from './styles';

interface IModalFilterProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalFilter: React.FC<IModalFilterProps> = ({ isOpen, setIsOpen }) => {
  const filterOptionsNames = [
    { alias: 'Nome do produto', option: 'name' },
    { alias: 'Data de vencimento', option: 'expiration_date' },
    { alias: 'Número do lote', option: 'lot' },
    { alias: 'Número do código de barras', option: 'product_code' },
  ];

  const [selected, setSelected] = useState('');

  const { handleSelectFilter: selectFilter, handleRemoveFilter } = useFilter();

  const handleCheckBox = useCallback((option: string) => {
    setSelected(option);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen();
    handleRemoveFilter();
  }, [handleRemoveFilter, setIsOpen]);

  const handleSelectFilter = useCallback(() => {
    selectFilter(selected);
    setIsOpen();
  }, [selectFilter, selected, setIsOpen]);

  const showFilterOptionsNames = useMemo(() => {
    return filterOptionsNames.map(({ alias, option }) => {
      return (
        <div key={option}>
          <CheckBox
            selected={selected === option}
            onClick={() => handleCheckBox(option)}
          >
            {selected === option && <FiCheck size={20} color="#1D68D8" />}
          </CheckBox>

          <p>{alias}</p>
        </div>
      );
    });
  }, [filterOptionsNames, selected, handleCheckBox]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styles={{
        content: {
          width: '80%',
          height: '460px',
          margin: 'auto',
          border: 0,
          backgroundColor: '#2d2b2c',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <Container>
        <CloseModal>
          <button type="button" onClick={handleCloseModal}>
            <FiX size={24} color="#fff" />
          </button>
        </CloseModal>

        <div>
          <h1>Buscar por:</h1>

          <Separator />

          <FaFilter size={24} color="#F9F7F4" />
        </div>

        <Content>
          {showFilterOptionsNames}

          <button type="button" onClick={handleSelectFilter}>
            Selecionar
          </button>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalFilter;
