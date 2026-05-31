import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getAds } from '@/features/Ad/api';
import type { Nullable } from '@/shared/types';
import type { AdPaginated } from '@/entities/Ad';

type UseAdsReturn = {
    data: Nullable<AdPaginated>;
    isFetching: boolean;
    isLoading: boolean;
    page: number;
    fetchNextPage: () => void;
    fetchPage: (page: number) => void;
    fetchPrevPage: () => void;
};

export const useAds = (): UseAdsReturn => {
    const [page, setPage] = useState(0);

    const fetchNextPage = () => {
        setPage((prev) => prev + 1);
    };

    const fetchPrevPage = () => {
        if (page === 0) {
            return;
        }
        setPage((prev) => prev - 1);
    };

    const fetchPage = (newPage: number) => {
        if (newPage === page) {
            return;
        }

        setPage(newPage);
    };

    const { data, isLoading, isFetching } = useQuery<Nullable<AdPaginated>>({
        queryKey: ['ads-paginated', page],
        queryFn: () => getAds({ skip: page * 10 }),
        placeholderData: keepPreviousData,
    });

    return {
        data: data as Nullable<AdPaginated>,
        isLoading,
        page: page + 1,
        fetchNextPage,
        isFetching,
        fetchPrevPage,
        fetchPage,
    };
};
