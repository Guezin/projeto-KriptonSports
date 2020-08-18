import React, { useEffect, useState, useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useProduct } from '../../hooks/product';

import Header from '../../components/Header';
import Product from '../../components/Product';

import { Container, Content } from './styles';

const Products: React.FC = () => {
  const { products, loadingProducts } = useProduct();

  const productsToBeShown = useMemo(() => {
    return products.map(product => (
      <Product key={product.lot} product={product} showButtons />
    ));
  }, [products]);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Produtos</h1>

        {loadingProducts ? (
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

export default Products;
