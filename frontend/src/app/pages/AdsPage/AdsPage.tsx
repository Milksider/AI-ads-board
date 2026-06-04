import { AdsListing } from '@/features/Ad/AdsListing';
import { AdsSearch } from '@/features/Ad/AdsSearch';
import { AdsViewProvider } from '@/features/Ad/AdsView';

export const AdsPage = () => {
    return (
        <div>
            <AdsViewProvider>
                <AdsSearch />
                <AdsListing />
            </AdsViewProvider>
        </div>
    );
};
