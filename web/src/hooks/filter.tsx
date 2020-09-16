import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

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

  const handleSelectFilter = useCallback((value: string) => {
    setSelectedFilter(true);
    setFilterValue(value);
  }, []);

  const handleRemoveFilter = useCallback(() => {
    setSelectedFilter(false);
  }, []);

  const handleSearhValue = useCallback(
    async (value: string) => {
      const { data } = await api.post('/search', {
        type: filterValue,
        target: value,
      });

      console.log(data);
    },
    [filterValue]
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
