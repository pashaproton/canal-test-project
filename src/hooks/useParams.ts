import { useMemo } from 'react';

import { API_KEY } from '../config';
import { useAppContext } from '../Context';
import { RequestParams } from '../api/types';

export type UseParams = (page: number) => RequestParams;

const useParams: UseParams = page => {
  const {
    adult,
    search,
    sortBy
  } = useAppContext();

  return useMemo<ReturnType<UseParams>>(
    () => ({
      page,
      adult,
      query: search,
      api_key: API_KEY,
      sort_by: sortBy
    }),
    [page, adult, search, sortBy]
  );
};

export default useParams;