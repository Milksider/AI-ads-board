import { Box } from '@mui/material';

import styles from './AdsSearch.module.scss';

import { SearchBar } from '@/features/SearchBar';
import { AdsSort } from '@/features/Ad/AdsSort';
import { AdsView } from '@/features/Ad/AdsView';

export const AdsSearch = () => {
    return (
        <Box className={styles.wrapper}>
            <SearchBar className={styles.search} />
            <Box className={styles.additional}>
                <AdsView />
                <AdsSort />
            </Box>
        </Box>
    );
};
