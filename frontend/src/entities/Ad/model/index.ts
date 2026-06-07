export type Category = 'auto' | 'real_estate' | 'electronics';

export type AdType = {
    id: string;
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

export interface AdDetail extends AdType {
    createdAt: string;
    description: string;
    params: AutoParams | RealEstateParams | ElectronicsParams;
    updatedAt: string;
}

export type Transmission = 'automatic' | 'manual';

export type RealEstateType = 'flat' | 'house' | 'room';

export type ElectronicsType = 'phone' | 'laptop' | 'misc';

export type ElectronicsCondition = 'new' | 'used';

export type AutoParams = {
    brand?: string;
    enginePower?: number;
    mileage?: number;
    model?: string;
    transmission?: Transmission;
    yearOfManufacture?: number;
};

export type RealEstateParams = {
    address?: string;
    area?: number;
    floor?: number;
    type?: RealEstateType;
};

export type ElectronicsParams = {
    brand?: string;
    color?: string;
    condition?: ElectronicsCondition;
    model?: string;
    type?: ElectronicsType;
};

export type CharacteristicKey = keyof (AutoParams & RealEstateParams & ElectronicsParams);
