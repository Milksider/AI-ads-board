import type { Category, AutoParams, ElectronicsParams, RealEstateParams } from '@/entities/Ad';

export const isAuto = (
    params: AutoParams | RealEstateParams | ElectronicsParams,
    category: Category,
): params is AutoParams => {
    return category === 'auto';
};

export const isRealEstate = (
    params: AutoParams | RealEstateParams | ElectronicsParams,
    category: Category,
): params is RealEstateParams => {
    return category === 'real_estate';
};

export const isElectronics = (
    params: AutoParams | RealEstateParams | ElectronicsParams,
    category: Category,
): params is ElectronicsParams => {
    return category === 'electronics';
};
