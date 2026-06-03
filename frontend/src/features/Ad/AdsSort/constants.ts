import type { SortOption, SortValue } from './types';

export const sortOptions: SortOption[] = [
    {
        value: 'sortColumn=title&sortDirection=asc',
        title: 'По названию (А - Я)',
    },
    {
        value: 'sortColumn=title&sortDirection=desc',
        title: 'По названию (Я - А)',
    },
    {
        value: 'sortColumn=createdAt&sortDirection=asc',
        title: 'По новизне (сначала новые)',
    },
    {
        value: 'sortColumn=createdAt&sortDirection=desc',
        title: 'По новизне (сначала старые)',
    },
    // {
    //   value: '',
    //   title: 'По цене (сначала дешевле)',
    // },
    // {
    //   value: '',
    //   title: 'По цене (сначала дороже)',
    // },
];

export const defaultSort: SortValue = 'sortColumn=createdAt&sortDirection=asc';
