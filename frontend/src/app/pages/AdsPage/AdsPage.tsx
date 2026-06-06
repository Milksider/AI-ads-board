import { Box } from '@mui/material';

import styles from './AdsPage.module.scss';

import { AdsListing } from '@/features/Ad/AdsListing';
import { AdsSearch } from '@/features/Ad/AdsSearch';
import { AdsViewProvider } from '@/features/Ad/AdsView';
import { AdsFilters } from '@/features/Ad/AdsFilters';


export const AdsPage = () => {
    return (
        <Box>
            <AdsViewProvider>
                <AdsSearch />
                <Box className={styles.content}>
                    <AdsFilters />
                    <AdsListing />
                </Box>
            </AdsViewProvider>
        </Box>
    );
};
