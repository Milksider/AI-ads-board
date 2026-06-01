import type { AdsParameters } from '@/entities/Ad';
import { getQueryFromObject } from '@/shared/lib/helpers';

export const apiRequestPath = {
    GET_ADS: (params?: AdsParameters) => {
        if (!params) {
            return '/api/items';
        }

        const query = getQueryFromObject(params);

        return '/api/items' + query;
    },
};
