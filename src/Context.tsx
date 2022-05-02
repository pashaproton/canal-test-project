import React from 'react';

import useSearchParam from './hooks/useSearchParam';
import { Context, SORT_BY } from './types';

const defaultValues: Context = {
  adult: true,
  search: '',
  sortBy: SORT_BY.POPULARITY_DESC,
  setAdult: () => undefined,
  setSearch: () => undefined,
  setSortBy: () => undefined
};

const context = React.createContext<Context>(defaultValues);

interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children
}) => {
  const [q] = useSearchParam();
  const [adult, setAdult] = React.useState<Context['adult']>(defaultValues.adult);
  const [search, setSearch] = React.useState<Context['search']>(q ?? defaultValues.search);
  const [sortBy, setSortBy] = React.useState<Context['sortBy']>(defaultValues.sortBy);

  const value = React.useMemo<Context>(
    () => ({ adult, search, sortBy, setAdult, setSearch, setSortBy }),
    [adult, search, sortBy]
  );

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
};

export const useAppContext = () => {
  const ctx = React.useContext(context);

  if (!ctx) {
    throw Error('useAppContext should be used inside of AppContextProvider');
  }

  return ctx;
}
