import React, { useMemo, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useLot } from '../../hooks/lot';

import Layout from '../../components/Layout';
import Product from '../../components/Product';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { lots, handleLotsLoading } = useLot();

  const lotsToBeShown = useMemo(() => {
    return lots.map(data => (
      <Product
        key={data.lot}
        product={data.product}
        lot={data.lot}
        expirationDate={data.expiration_date}
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
            lotsToBeShown
          )}
        </Content>
      </Container>
    </Layout>
  );
};

export default Home;
