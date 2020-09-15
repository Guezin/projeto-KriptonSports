import React, { useMemo, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { Form } from '@unform/web';

import { useLot } from '../../hooks/lot';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Product from '../../components/Product';

import { Container, Content, Separator } from './styles';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { lots, handleLotsLoading } = useLot();

  const lotsToBeShown = useMemo(() => {
    return lots.map(data => (
      <Product
        key={data.lot}
        product={data.product}
        lot={data.lot}
        expirationDate={data.expiration_date}
        showButtons
      />
    ));
  }, [lots]);

  useEffect(() => {
    (async () => {
      await handleLotsLoading();

      setLoading(false);
    })();
  }, [handleLotsLoading]);

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
            lotsToBeShown
          )}
        </Content>
      </Container>
    </Layout>
  );
};

export default Products;
