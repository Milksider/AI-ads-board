import { AdsListing } from '@/features/Ad/AdsListing';
import { AdsSearch } from '@/features/Ad/AdsSearch';

export const AdsPage = () => {
    return (
        <div>
            <AdsSearch />
            <AdsListing />
        </div>
    );
};
