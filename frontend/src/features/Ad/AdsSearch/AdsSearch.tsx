import { Box } from '@mui/material';

import styles from './AdsSearch.module.scss';

import { SearchBar } from '@/features/SearchBar';

export const AdsSearch = () => {
    return (
        <Box className={styles.wrapper}>
            <SearchBar />
        </Box>
    );
};
