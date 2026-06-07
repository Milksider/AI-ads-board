import type { AutoParams, ElectronicsParams, RealEstateParams } from '@/entities/Ad';

export const AUTO_PARAMS_KEYS: (keyof AutoParams)[] = [
    'brand',
    'model',
    'yearOfManufacture',
    'transmission',
    'mileage',
    'enginePower',
];

export const ELECTRONICS_PARAMS_KEYS: (keyof ElectronicsParams)[] = [
    'brand',
    'model',
    'type',
    'condition',
    'color',
];

export const REAL_ESTATE_PARAMS_KEYS: (keyof RealEstateParams)[] = [
    'type',
    'address',
    'area',
    'floor',
];
