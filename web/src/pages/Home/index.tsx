import React, { useEffect, useState, useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import Product from '../../components/Product';

import { Container, Content } from './styles';

interface IProduct {
  id: string;
  name: string;
  price: number;
  product_code: number;
  quantity: number;
  expiration_date: string;
}

interface IResponse {
  id: number;
  product: IProduct;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IResponse[]>([]);
  const { token } = useAuth();

  const productsToBeShown = useMemo(() => {
    return products.map(product => (
      <Product key={product.id} product={product} />
    ));
  }, [products]);

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await api.get<IResponse[]>('/lots', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, [token]);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Home</h1>

        {loading ? (
          <SkeletonTheme color="#3A3638" highlightColor="#514B4E">
            <Skeleton
              count={7}
              height={80}
              style={{
                marginTop: 16,
                borderRadius: 8,
              }}
            />
          </SkeletonTheme>
        ) : (
          productsToBeShown
        )}
      </Content>
    </Container>
  );
};

export default Home;
