import React, { useEffect, useState, useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useProduct } from '../../hooks/product';

import Header from '../../components/Header';
import Product from '../../components/Product';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const { loadProducts, products } = useProduct();

  const [loading, setLoading] = useState(true);

  const productsToBeShown = useMemo(() => {
    return products.map(product => (
      <Product key={product.lot} product={product} />
    ));
  }, [products]);

  useEffect(() => {
    (async () => {
      await loadProducts();

      setLoading(false);
    })();
  }, [loadProducts]);

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
