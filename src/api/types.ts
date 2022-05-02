import { SORT_BY } from '../types';

export interface RequestParams {
  page: number
  adult?: boolean
  query?: string
  api_key: string
  sort_by?: SORT_BY
  language?: string
}

export interface DefaultResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface GenericResponseResult {
  id: number
  overview: string
  genre_ids: number[]
  popularity: number
  vote_count: number
  poster_path?: string
  vote_average: number
  backdrop_path?: string
  original_language: string
}

export interface ResponseTV extends GenericResponseResult {
  name: string
  original_name: string
  first_air_date: string
  origin_country: string[]
}

export interface ResponseMovie extends GenericResponseResult {
  adult: boolean
  title: string
  video: boolean
  release_date: string
  original_title: string
}
