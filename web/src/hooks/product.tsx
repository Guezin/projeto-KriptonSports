import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import api from '../services/api';

const ProductContext = createContext<IProductProviderProps>(
  {} as IProductProviderProps
);

interface IProduct {
  id: string;
  name: string;
  quantity: number;
  price: string;
  product_code: number;
  expiration_date: string;
}

interface IProductInfo {
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

interface IResponseAPIGet {
  id: number;
  product: IProduct;
}

interface IResponseAPIPost {
  lot: number;
  product: IProduct;
}

interface IProductProviderProps {
  loadingProducts: boolean;
  products: IProductInfo[];
  create: (productData: Omit<IProduct, 'id'>) => Promise<void>;
}

const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProductInfo[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const create = useCallback(
    async ({
      name,
      quantity,
      price,
      product_code,
      expiration_date,
    }: ICreateProps) => {
      try {
        const { data } = await api.post<IResponseAPIPost>('/products', {
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

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IResponseAPIGet[]>('/lots');

      const result = data.map(item => {
        return {
          lot: item.id,
          product: item.product,
        };
      });

      setProducts(result);
      setLoadingProducts(false);
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ create, products, loadingProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = (): IProductProviderProps => {
  const context = useContext(ProductContext);

  return context;
};

export { ProductProvider, useProduct };
