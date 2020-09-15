import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

const LotContext = createContext<ILotProviderProps>({} as ILotProviderProps);

interface IProduct {
  name: string;
  quantity: number;
  price: string;
  product_code: number;
}

export interface ILot {
  lot: number;
  expiration_date: string;
  product: IProduct;
}

interface ICreateProps {
  name: string;
  quantity: number;
  price: string;
  product_code: number;
  expiration_date: string;
}

interface ILotProviderProps {
  lots: ILot[];
  setLots: React.Dispatch<React.SetStateAction<ILot[]>>;
  create: (lotData: ICreateProps) => Promise<void>;
  update: (data: ILot) => Promise<void>;
  deleteLot: (lot: number) => Promise<void>;
  handleLotsLoading: () => Promise<void>;
}

const LotProvider: React.FC = ({ children }) => {
  const [lots, setLots] = useState<ILot[]>([]);

  const create = useCallback(
    async ({
      name,
      quantity,
      price,
      product_code,
      expiration_date,
    }: ICreateProps) => {
      try {
        const { data } = await api.post('/lots', {
          name,
          quantity: Number(quantity),
          price,
          product_code: Number(product_code),
          expiration_date,
        });

        setLots(oldState => [...oldState, data]);

        alert('Produto adicionado com sucesso!');
      } catch {
        alert('Erro ao adicionar produto, verifique os dados!');
      }
    },
    []
  );

  const update = useCallback(
    async ({ lot, expiration_date, product }: ILot) => {
      const copyLots = [...lots];
      const { name, quantity, price, product_code } = product;

      try {
        const { data } = await api.put(`/lots/${lot}/update`, {
          name,
          quantity,
          price,
          product_code,
          expiration_date,
        });

        const indexOfLot = copyLots.findIndex(
          findIndexLot => findIndexLot.lot === data.lot
        );

        copyLots[indexOfLot].product = data.product;

        setLots(copyLots);

        alert('Produto atualizado com sucesso!');
      } catch {
        alert('Erro ao atualizar produto!');
      }
    },
    [lots]
  );

  const deleteLot = useCallback(
    async (lot: number) => {
      try {
        await api.delete(`/lots/${lot}/delete`);

        const updatedListLots = lots.filter(findLot => findLot.lot !== lot);

        setLots(updatedListLots);

        alert('Lote excluido com sucesso!');
      } catch {
        alert('Erro ao excluir lote!');
      }
    },
    [lots]
  );

  const handleLotsLoading = useCallback(async () => {
    const { data } = await api.get('/lots');

    setLots(data);
  }, []);

  return (
    <LotContext.Provider
      value={{
        create,
        update,
        deleteLot,
        handleLotsLoading,
        lots,
        setLots,
      }}
    >
      {children}
    </LotContext.Provider>
  );
};

const useLot = (): ILotProviderProps => {
  const context = useContext(LotContext);

  return context;
};

export { LotProvider, useLot };
