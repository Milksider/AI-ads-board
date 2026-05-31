import { apiFetch } from '@/app/api/apiFetch.ts';
import type { AdPaginated, AdsParameters } from '@/entities/Ad';
import { apiRequestPath } from '@/app/config';
import type { Nullable } from '@/shared/types';

export const getAds = async (params: AdsParameters): Promise<Nullable<AdPaginated>> => {
    return await apiFetch<AdPaginated>({ url: apiRequestPath.GET_ADS(params) });
};
