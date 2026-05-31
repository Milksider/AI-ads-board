import type { JsonObject } from '@/shared/types';

export const getQueryFromObject = (params: JsonObject) => {
    const searchParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== null && typeof value !== 'object') {
            searchParams.set(key, String(value));
        }
    });

    const query = searchParams.toString();

    if (query.length > 0) {
        return '?' + query;
    }

    return '';
};
