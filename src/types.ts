import { Dispatch, SetStateAction } from 'react';

export enum SORT_BY {
  POPULARITY_ASC = 'popularity.asc',
  POPULARITY_DESC = 'popularity.desc',
  RELEASE_DATE_ASC = 'release_date.asc',
  RELEASE_DATE_DESC = 'release_date.desc',
  REVENUE_ASC = 'revenue.asc',
  REVENUE_DESC = 'revenue.desc',
  ORIGINAL_TITLE_ASC = 'original_title.asc',
  ORIGINAL_TITLE_DESC = 'original_title.desc',
  VOTE_AVERAGE_ASC = 'vote_average.asc',
  VOTE_AVERAGE_DESC = 'vote_average.desc',
  VOTE_COUNT_ASC = 'vote_count.asc',
  VOTE_COUNT_DESC = 'vote_count.desc',
  PRIMARY_RELEASE_DATE_ASC = 'primary_release_date.asc',
  PRIMARY_RELEASE_DATE_DESC = 'primary_release_date.desc'
}

export interface Movie {
  id: number
  date: string
  title: string
  voteCount: number
  imagePath?: string
  popularity: number
  voteAverage: number
  description: string
}

export interface Context {
  adult: boolean
  search: string
  sortBy: SORT_BY
  setAdult: Dispatch<SetStateAction<boolean>>
  setSearch: Dispatch<SetStateAction<string>>
  setSortBy: Dispatch<SetStateAction<SORT_BY>>
}