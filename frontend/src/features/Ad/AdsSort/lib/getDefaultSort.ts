import type { SortValue } from '../types';
import { defaultSort } from '../constants.ts';

export const getDefaultSort = (searchParams: URLSearchParams): SortValue => {
    const sortColumn = searchParams.get('sortColumn');
    const sortDirection = searchParams.get('sortDirection');

    if (!sortColumn || !sortDirection) {
        return defaultSort;
    }

    return `sortColumn=${sortColumn}&sortDirection=${sortDirection}` as SortValue;
};
