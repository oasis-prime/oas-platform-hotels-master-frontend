/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetPopularInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: PopularSearch
// ====================================================

export interface PopularSearch_getAllPopular_data {
  __typename: "Popular";
  name: string | null;
  image: string | null;
  link: string | null;
  count: number | null;
  status: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface PopularSearch_getAllPopular_pagination {
  __typename: "PaginationType";
  page: number;
  pageSize: number;
  total: number;
}

export interface PopularSearch_getAllPopular {
  __typename: "PopularData";
  data: PopularSearch_getAllPopular_data[];
  pagination: PopularSearch_getAllPopular_pagination;
}

export interface PopularSearch {
  getAllPopular: PopularSearch_getAllPopular;
}

export interface PopularSearchVariables {
  input: GetPopularInput;
}
