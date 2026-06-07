import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    FormControlLabel,
    Checkbox,
    Divider,
    Switch,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './AdsFilters.module.scss';
import { useAdsFilters } from './lib';

export const AdsFilters = () => {
    const { categories, onChangeCategories, onChangeRevision, needsRevision, resetFilters } =
        useAdsFilters();

    return (
        <Box className={styles.filters}>
            <Box className={styles.wrapper}>
                <Box className={styles.title}>Фильтры</Box>

                <Accordion defaultExpanded={categories.length > 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box className={styles.category}>Категория</Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box display="flex" flexDirection="column" gap="8px">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={categories.includes('auto')}
                                        onChange={() => onChangeCategories('auto')}
                                    />
                                }
                                label="Авто"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={categories.includes('electronics')}
                                        onChange={() => onChangeCategories('electronics')}
                                    />
                                }
                                label="Электроника"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={categories.includes('real_estate')}
                                        onChange={() => onChangeCategories('real_estate')}
                                    />
                                }
                                label="Недвижимость"
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Divider />

                <FormControlLabel
                    control={<Switch checked={needsRevision} onChange={onChangeRevision} />}
                    label="Только требующие доработок"
                    labelPlacement="start"
                    className={styles.revision}
                />
            </Box>

            <button title="Сбросить фильтры" className={styles.reset} onClick={resetFilters}>
                Сбросить фильтры
            </button>
        </Box>
    );
};
