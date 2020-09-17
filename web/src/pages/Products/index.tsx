import React, { useMemo, useEffect, useState, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';
import { Form } from '@unform/web';

import { useLot } from '../../hooks/lot';
import { useFilter } from '../../hooks/filter';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Product from '../../components/Product';
import ModalFilter from '../../components/ModalFilter';

import { Container, Content, Separator } from './styles';

interface IFormSubmitData {
  search_value: string;
}

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [modalStatus, setModalStatus] = useState(false);

  const { lots, handleLotsLoading, lotsFoundBySearch } = useLot();
  const { handleSearhValue, selectedFilter } = useFilter();

  const lotsToBeShown = useMemo(() => {
    const result = lotsFoundBySearch.length ? lotsFoundBySearch : lots;

    return result.map(data => (
      <Product
        key={data.lot}
        product={data.product}
        lot={data.lot}
        expirationDate={data.expiration_date}
        showButtons
      />
    ));
  }, [lots, lotsFoundBySearch]);

  const toggleModal = useCallback(() => {
    setModalStatus(!modalStatus);
  }, [modalStatus]);

  const handleSubmit = useCallback(
    ({ search_value }: IFormSubmitData) => {
      handleSearhValue(search_value);
    },
    [handleSearhValue]
  );

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

            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="search_value"
                icon={FiSearch}
                placeholder="Buscar..."
              />

              <Separator />

              <button type="button" onClick={toggleModal}>
                {selectedFilter ? (
                  <FaFilter size={24} color="#fff" />
                ) : (
                  <FiFilter size={24} color="#fff" />
                )}
              </button>

              <ModalFilter isOpen={modalStatus} setIsOpen={toggleModal} />
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
