import useAxios from '../axios';
import {
  ResponseTV,
  RequestParams,
  ResponseMovie,
  DefaultResponse
} from './types'

export const useSearchTV = () => useAxios<
  DefaultResponse<ResponseTV>,
  RequestParams
>({ url: '/search/tv' }, { manual: true });

export const useSearchMovie = () => useAxios<
  DefaultResponse<ResponseMovie>,
  RequestParams
>({ url: '/search/movie' }, { manual: true });

export const useDiscoverTV = () => useAxios<
  DefaultResponse<ResponseTV>,
  RequestParams
>({ url: '/discover/tv' }, { manual: true });

export const useDiscoverMovie = () => useAxios<
  DefaultResponse<ResponseMovie>,
  RequestParams
>({ url: '/discover/movie' }, { manual: true });


