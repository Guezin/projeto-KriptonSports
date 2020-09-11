import React, { useMemo, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { Form } from '@unform/web';

import api from '../../services/api';
import { useProduct, IProduct } from '../../hooks/product';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Product from '../../components/Product';

import { Container, Content, Separator } from './styles';

interface IResponseAPIGet {
  id: number;
  product: IProduct;
}

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { products, setProducts } = useProduct();

  const productsToBeShown = useMemo(() => {
    return products.map(product => (
      <Product key={product.lot} product={product} showButtons />
    ));
  }, [products]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<IResponseAPIGet[]>('/lots');

        const result = data.map(item => {
          return {
            lot: item.id,
            product: item.product,
          };
        });

        setProducts(result);
      } catch {
        alert('Erro ao carregar produtos!');
      } finally {
        setLoading(false);
      }
    })();
  }, [setProducts]);

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
    </Layout>
  );
};

export default Products;
