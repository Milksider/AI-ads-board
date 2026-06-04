import type { ReactNode } from 'react';

import type { Nullable } from '@/shared/types';

export type View = 'tile' | 'list';

export type AdsViewContextValue = Nullable<{
    view: View;
    onChangeView: (view: View) => void;
}>;

export type AdsViewProviderProps = {
    children: ReactNode;
};
