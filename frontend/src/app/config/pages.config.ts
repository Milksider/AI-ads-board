export const pages = {
    ADS: '/ads',
    AD_DETAIL: (id: string) => `/ads/${id}`,
    AD_EDIT: (id: string) => `/ads/${id}/edit`,
} as const;
