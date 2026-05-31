export type Category = 'auto' | 'real_estate' | 'electronics';

export type AdType = {
    category: Category;
    needsRevision: boolean;
    price: number;
    title: string;
};

export type AdPaginated = {
    items: AdType[];
    total: number;
};

export type AdsParameters = Partial<{
    categories: string;
    limit: number;
    needsRevision: boolean;
    q: string;
    skip: number;
    sortColumn: string;
    sortDirection: string;
}>;
