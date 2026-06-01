import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAds } from '@/features/Ad/api';
import type { Nullable } from '@/shared/types';
import type { AdPaginated } from '@/entities/Ad';

type UseAdsReturn = {
    data: Nullable<AdPaginated>;
    isFetching: boolean;
    isLoading: boolean;
    page: number;
    fetchPage: (page: number) => void;
    updateSearchParam: (key: string, value: string) => void;
};

const searchParamsKeys = [
    'q',
    'limit',
    'skip',
    'needsRevision',
    'categories',
    'sortColumn',
    'sortDirection',
];

export const useAds = (): UseAdsReturn => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setPage = (page: number) => {
        setSearchParams({
            ...searchParams,
            skip: String(page * 10),
        });
    };

    const getPage = () => {
        if (!searchParams.has('skip')) {
            return 0;
        }

        return Number(searchParams.get('skip')) / 10;
    };

    const updateSearchParam = (key: string, value: string) => {
        const isNewParam = !searchParams.has(key);

        const newParams = {
            ...searchParams,
            [key]: value,
            skip: isNewParam ? '0' : String(getPage()),
        };

        setSearchParams(newParams);
    };

    const getQueryKeys = useMemo(() => {
        const queryKeys = {
            q: '',
            skip: '0',
            limit: '',
            needsRevision: '',
            category: '',
            sortColumn: '',
            sortDirection: '',
        };

        searchParamsKeys.forEach((filter) => {
            const filterValue = searchParams.get(filter);

            if (filterValue) {
                queryKeys[filter] = filterValue;
            }
        });

        return Object.values(queryKeys);
    }, [searchParams]);

    const getQueryFromSearchParams = () => {
        return '?' + searchParams.toString();
    };

    const fetchPage = (newPage: number) => {
        if (newPage === Number(getPage())) {
            return;
        }

        setPage(newPage);
    };

    const { data, isLoading, isFetching } = useQuery<Nullable<AdPaginated>>({
        queryKey: ['ads-paginated', ...getQueryKeys],
        queryFn: () => getAds(getQueryFromSearchParams()),
        placeholderData: keepPreviousData,
    });

    return {
        data: data as Nullable<AdPaginated>,
        isLoading,
        page: getPage() + 1,
        isFetching,
        fetchPage,
        updateSearchParam,
    };
};
