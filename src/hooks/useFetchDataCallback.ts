import { useCallback } from 'react';

import { DefaultResponse, RequestParams } from '../api/types';
import { useDiscoverMovie, useDiscoverTV, useSearchMovie, useSearchTV } from '../api';

const useFetchDataCallback = <T>(type: 'TV' | 'Movie') => {
  const [, fetchSearch] = (type === 'TV' ? useSearchTV : useSearchMovie)();
  const [, fetchDiscover] = (type === 'TV' ? useDiscoverTV : useDiscoverMovie)();

  return useCallback(
    async (params: RequestParams) => {
      const result = (params.query?.length ?? 0) > 0
        ? await fetchSearch({ params })
        : await fetchDiscover({ params });

      return result.data as unknown as DefaultResponse<T>;
    },
    [fetchSearch, fetchDiscover]
  );
};

export default useFetchDataCallback;
