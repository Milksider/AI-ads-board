import { useContext } from 'react';

import { AdsViewContext } from './AdsViewProvider.tsx';

export const useAdsViewContext = () => {
    const context = useContext(AdsViewContext);

    if (!context) {
        throw new Error('useAdsViewContext должен быть обернут в AdsViewContextProvider');
    }

    return context;
};
