import type { JsonObject, Nullable } from '@/shared/types';
import { isFormData } from '@/shared/lib';

type ApiFetchParams = {
    url: string;
    body?: FormData | JsonObject;
    headers?: Record<string, string>;
    method?: 'GET' | 'POST' | 'PUT';
};

export const apiFetch = async <T>({
    url,
    method = 'GET',
    body,
    headers,
}: ApiFetchParams): Promise<Nullable<T>> => {
    const contentType = isFormData(body) ? 'multipart/form-data' : 'application/json';
    const requestBody = isFormData(body) ? body : JSON.stringify(body);

    const requestInit = {
        method,
        headers: {
            ...headers,
            'Content-Type': contentType,
        },
        body: requestBody,
    };

    try {
        const response = await fetch(url, requestInit);
        return (await response.json()) as T;
    } catch (error) {
        console.error(error);
        return null;
    }
};
