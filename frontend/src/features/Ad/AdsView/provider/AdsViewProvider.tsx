import { createContext, useState } from 'react';

import type { AdsViewContextValue, AdsViewProviderProps, View } from '../types.ts';

const LOCALE_STORAGE_KEY = 'view';
const DEFAULT_VIEW = 'list';

export const AdsViewContext = createContext<AdsViewContextValue>(null);

export const AdsViewProvider = ({ children }: AdsViewProviderProps) => {
    const [view, setView] = useState<View>(
        localStorage.getItem(LOCALE_STORAGE_KEY) || DEFAULT_VIEW,
    );

    const onChangeView = (newView: View) => {
        if (newView === view) {
            return;
        }

        setView(newView);
        localStorage.setItem(LOCALE_STORAGE_KEY, newView);
    };

    const value = {
        view,
        onChangeView,
    };

    return <AdsViewContext.Provider value={value}>{children}</AdsViewContext.Provider>;
};
