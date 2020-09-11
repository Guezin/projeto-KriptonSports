import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

const ProductContext = createContext<IProductProviderProps>(
  {} as IProductProviderProps
);

export interface IProduct {
  id: string;
  name: string;
  quantity: number;
  price: string;
  product_code: number;
  expiration_date: string;
}

export interface IProductInfo {
  lot: number;
  product: IProduct;
}

interface ICreateProps {
  name: string;
  quantity: number;
  price: string;
  product_code: number;
  expiration_date: string;
}

interface IResponseAPIPost {
  lot: number;
  product: IProduct;
}

interface IProductProviderProps {
  products: IProductInfo[];
  setProducts: React.Dispatch<React.SetStateAction<IProductInfo[]>>;
  create: (productData: Omit<IProduct, 'id'>) => Promise<void>;
  update: (data: IProductInfo) => Promise<void>;
  deleteBatch: (batch: number) => Promise<void>;
}

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProductInfo[]>([]);

  const create = useCallback(
    async ({
      name,
      quantity,
      price,
      product_code,
      expiration_date,
    }: ICreateProps) => {
      try {
        const { data } = await api.post<IResponseAPIPost>('/lots', {
          name,
          quantity: Number(quantity),
          price,
          product_code: Number(product_code),
          expiration_date,
        });

        setProducts(oldState => [...oldState, data]);

        alert('Produto adicionado com sucesso!');
      } catch {
        alert('Erro ao adicionar produto, verifique os dados!');
      }
    },
    []
  );

  const update = useCallback(
    async ({ lot, product }: IProductInfo) => {
      const copyProducts = products;
      const { name, quantity, price, product_code, expiration_date } = product;

      try {
        await api.put(`/lots/${lot}`, {
          name,
          quantity,
          price,
          product_code,
          expiration_date,
        });

        const indexProduct = products.findIndex(
          findIndexProduct => findIndexProduct.lot === lot
        );

        copyProducts[indexProduct].product = product;

        setProducts(copyProducts);

        alert('Produto atualizado com sucesso!');
      } catch {
        alert('Erro ao atualizar produto!');
      }
    },
    [products]
  );

  const deleteBatch = useCallback(
    async (batch: number) => {
      try {
        await api.delete(`/lots/${batch}`);

        const updatedListBatch = products.filter(
          product => product.lot !== batch
        );

        setProducts(updatedListBatch);
        alert('Lote excluido com sucesso!');
      } catch {
        alert('Erro ao excluir lote!');
      }
    },
    [products]
  );

  return (
    <ProductContext.Provider
      value={{
        create,
        update,
        deleteBatch,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = (): IProductProviderProps => {
  const context = useContext(ProductContext);

  return context;
};

export { ProductProvider, useProduct };
