import { apiFetch } from '@/app/api/apiFetch';
import { apiRequestPath } from '@/app/config';
import type { Nullable } from '@/shared/types';
import type { AdDetail } from '@/entities/Ad';

export const getAd = async (id: string): Promise<Nullable<AdDetail>> => {
    return await apiFetch<AdDetail>({ url: apiRequestPath.GET_AD(id) });
};
