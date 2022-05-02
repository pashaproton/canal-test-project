import { renderHook } from '@testing-library/react';
import { RequestParams } from '../../api/types';

describe('useParams', () => {
  it('should return default request params', () => {
    const { result } = renderHook<RequestParams, number>(page => ({ page, api_key: 'API_KEY' }), { initialProps: 10 });
    expect(result.current).toMatchObject<RequestParams>({ page: 10, api_key: 'API_KEY' });
  });
});