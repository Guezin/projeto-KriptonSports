import React, { useCallback } from 'react';
import {
  RiBarcodeLine,
  RiCoinsLine,
  RiCalendar2Line,
  RiStore3Line,
  RiCloseLine,
} from 'react-icons/ri';
import { TiSortNumericallyOutline } from 'react-icons/ti';

import { useLot } from '../../hooks/lot';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import { CloseModal, Form } from './styles';

interface IProductInfo {
  name: string;
  price: string;
  product_code: number;
  quantity: number;
  expiration_date: string;
}

interface IModalEditProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingLot: number;
  productInfo: IProductInfo;
}

interface IFormSubmitData {
  name: string;
  quantity: number;
  price: string;
  product_code: number;
  expiration_date: string;
}

const ModalEditProduct: React.FC<IModalEditProductProps> = ({
  isOpen,
  setIsOpen,
  editingLot,
  productInfo,
}) => {
  const { update } = useLot();

  const handleSubmit = useCallback(
    async ({
      name,
      quantity,
      price,
      product_code,
      expiration_date,
    }: IFormSubmitData) => {
      await update({
        lot: editingLot,
        expiration_date,
        product: {
          name,
          quantity,
          price,
          product_code,
        },
      });

      setIsOpen();
    },
    [editingLot, update, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <CloseModal>
        <button type="button" onClick={setIsOpen}>
          <RiCloseLine size={24} color="#fff" />
        </button>
      </CloseModal>

      <Form onSubmit={handleSubmit} initialData={productInfo}>
        <Input type="text" name="name" icon={RiStore3Line} placeholder="Nome" />
        <Input
          type="number"
          name="quantity"
          icon={TiSortNumericallyOutline}
          placeholder="Quantidade"
        />
        <Input
          type="text"
          name="price"
          icon={RiCoinsLine}
          pattern="[0-9]{1,}\.[0-9]{2}"
          placeholder="Preço R$0.00"
        />
        <Input
          type="number"
          name="product_code"
          icon={RiBarcodeLine}
          placeholder="Código de barras"
        />
        <Input
          type="text"
          name="expiration_date"
          icon={RiCalendar2Line}
          placeholder="Validade dd/mm/aaaa"
        />

        <Button type="submit">Atualizar</Button>
      </Form>
    </Modal>
  );
};

export default ModalEditProduct;
