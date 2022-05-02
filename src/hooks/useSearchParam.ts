import { useMemo } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

type UseSearchParam = () => [string, (value?: string) => void];

const useSearchParam: UseSearchParam = () => {
  const [value, setValue] = useQueryParam('q', StringParam)

  return useMemo<ReturnType<UseSearchParam>>(
    () => [value ?? '', setValue],
    [value, setValue]
  );
};

export default useSearchParam;
