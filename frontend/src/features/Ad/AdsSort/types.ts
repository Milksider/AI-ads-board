export type SortValue =
    | 'sortColumn=title&sortDirection=asc'
    | 'sortColumn=title&sortDirection=desc'
    | 'sortColumn=createdAt&sortDirection=asc'
    | 'sortColumn=createdAt&sortDirection=desc';
export type SortOption = {
    title: string;
    value: SortValue;
};
