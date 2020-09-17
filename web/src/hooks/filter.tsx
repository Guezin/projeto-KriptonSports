import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';
import { useLot } from '../hooks/lot';

interface IFilterProviderProps {
  selectedFilter: boolean;
  handleSelectFilter: (value: string) => void;
  handleRemoveFilter: () => void;
  handleSearhValue: (value: string) => void;
}

const FilterContext = createContext({} as IFilterProviderProps);

const FilterProvider: React.FC = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const { setLotsFoundBySearch } = useLot();

  const handleSelectFilter = useCallback((value: string) => {
    setSelectedFilter(true);
    setFilterValue(value);
  }, []);

  const handleRemoveFilter = useCallback(() => {
    setSelectedFilter(false);
    setFilterValue('');
    setLotsFoundBySearch([]);
  }, [setLotsFoundBySearch]);

  const handleSearhValue = useCallback(
    async (value: string) => {
      try {
        const { data } = await api.post('/search', {
          type: filterValue,
          target: value,
        });

        if (selectedFilter) {
          setLotsFoundBySearch(data);
        }
      } catch {
        alert('Nenhum resultado encontrado para sua busca!');
      }
    },
    [filterValue, selectedFilter, setLotsFoundBySearch]
  );

  return (
    <FilterContext.Provider
      value={{
        selectedFilter,
        handleSelectFilter,
        handleRemoveFilter,
        handleSearhValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = (): IFilterProviderProps => {
  const context = useContext(FilterContext);

  return context;
};

export { FilterProvider, useFilter };
