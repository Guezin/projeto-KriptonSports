import React, { useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { Form } from '@unform/web';

import { useProduct } from '../../hooks/product';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Product from '../../components/Product';

import { Container, Content, Separator } from './styles';

const Products: React.FC = () => {
  const { products, loadingProducts } = useProduct();

  const productsToBeShown = useMemo(() => {
    return products.map(product => (
      <Product key={product.lot} product={product} showButtons />
    ));
  }, [products]);

  return (
    <Layout>
      <Container>
        <Content>
          <fieldset>
            <legend>Produtos</legend>

            <Form onSubmit={() => {}}>
              <Input
                type="text"
                name="search"
                icon={FiSearch}
                placeholder="Buscar..."
              />

              <Separator />

              <FiFilter size={24} color="#fff" />
            </Form>
          </fieldset>

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
    </Layout>
  );
};

export default Products;
