import { useQuery } from '@tanstack/react-query';

import { getAd } from './getAd';

import type { Nullable } from '@/shared/types';
import type { AdDetail } from '@/entities/Ad';

type UseAdReturn = {
    data: Nullable<AdDetail>;
    isLoading: boolean;
};

export const useAd = (id: string): UseAdReturn => {
    const { data, isLoading } = useQuery({
        queryKey: ['detail', id],
        queryFn: () => getAd(id),
    });

    return { data: data as Nullable<AdDetail>, isLoading };
};
