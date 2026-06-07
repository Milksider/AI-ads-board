import type { AutoParams, Category, ElectronicsParams, RealEstateParams } from '@/entities/Ad';
import {
    isAuto,
    isElectronics,
    isRealEstate,
} from '@/features/Ad/AdDetail/lib/getAdParamsByCategory';
import { getMissingKeys } from '@/features/Ad/AdDetail/lib/getMissingKeys';
import { AUTO_PARAMS_KEYS, ELECTRONICS_PARAMS_KEYS, REAL_ESTATE_PARAMS_KEYS } from '@/entities/Ad';

export const getRevisionData = (
    params: AutoParams | RealEstateParams | ElectronicsParams,
    category: Category,
) => {
    if (isAuto(params, category)) {
        return getMissingKeys<AutoParams>(params, AUTO_PARAMS_KEYS);
    }

    if (isRealEstate(params, category)) {
        return getMissingKeys<RealEstateParams>(params, REAL_ESTATE_PARAMS_KEYS);
    }

    if (isElectronics(params, category)) {
        return getMissingKeys<ElectronicsParams>(params, ELECTRONICS_PARAMS_KEYS);
    }
};
