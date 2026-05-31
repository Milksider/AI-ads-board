import type { AdsParameters } from '@/entities/Ad';
import { getQueryFromObject } from '@/shared/lib/helpers';

export const apiRequestPath = {
    GET_ADS: (params: AdsParameters) => {
        const query = getQueryFromObject(params);

        return '/api/items' + query;
    },
};
