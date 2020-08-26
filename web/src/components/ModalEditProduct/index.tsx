import React, { useCallback } from 'react';
import {
  RiBarcodeLine,
  RiCoinsLine,
  RiCalendar2Line,
  RiStore3Line,
  RiCloseLine,
} from 'react-icons/ri';
import { TiSortNumericallyOutline } from 'react-icons/ti';

import { useProduct, IProduct, IProductInfo } from '../../hooks/product';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import { CloseModal, Form } from './styles';

interface IModalEditProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingProduct: IProductInfo;
}

const ModalEditProduct: React.FC<IModalEditProductProps> = ({
  isOpen,
  setIsOpen,
  editingProduct,
}) => {
  const { update } = useProduct();

  const handleSubmit = useCallback(
    async ({
      name,
      quantity,
      price,
      product_code,
      expiration_date,
    }: Omit<IProduct, 'id'>) => {
      await update({
        lot: editingProduct.lot,
        product: {
          id: editingProduct.product.id,
          name,
          quantity,
          price,
          product_code,
          expiration_date,
        },
      });

      setIsOpen();
    },
    [editingProduct, update, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <CloseModal>
        <button type="button" onClick={setIsOpen}>
          <RiCloseLine size={24} color="#fff" />
        </button>
      </CloseModal>

      <Form onSubmit={handleSubmit} initialData={editingProduct.product}>
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
