import React, { useMemo, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useProduct } from '../../hooks/product';

import Layout from '../../components/Layout';
import Product from '../../components/Product';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const { products, isLoadingProducts, handleLoadProducts } = useProduct();

  const productsToBeShown = useMemo(() => {
    return products.map(product => (
      <Product key={product.lot} product={product} />
    ));
  }, [products]);

  useEffect(() => {
    (async () => {
      await handleLoadProducts();
    })();
  }, [handleLoadProducts]);

  return (
    <Layout>
      <Container>
        <Content>
          <h1>Home</h1>

          {isLoadingProducts ? (
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
    </Layout>
  );
};

export default Home;
