import { Box } from '@mui/material';

import styles from './AdsSearch.module.scss';

import { SearchBar } from '@/features/SearchBar';
import { AdsSort } from '@/features/Ad/AdsSort';

export const AdsSearch = () => {
    return (
        <Box className={styles.wrapper}>
            <SearchBar />
            <AdsSort />
        </Box>
    );
};
