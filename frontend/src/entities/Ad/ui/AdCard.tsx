import { Box } from '@mui/material';
import DefaultImage from 'public/images/default-image.png';

import styles from './AdCard.module.scss';

import type { AdType } from '@/entities/Ad';
import { formatMoney } from '@/shared/lib';
import { getCategoryName } from '@/entities/Ad';

type AdCardProps = AdType;

export const AdCard = ({ title, price, needsRevision, category }: AdCardProps) => {
    return (
        <Box className={styles.wrapper}>
            <img
                src={DefaultImage}
                title="Изображение объявления"
                alt="Изображение объявления"
                width={200}
                height={150}
                className={styles.image}
            />
            <Box className={styles.body}>
                <Box className={styles.category}>{getCategoryName(category)}</Box>
                <Box className={styles.title} title={title}>
                    {title}
                </Box>
                <Box className={styles.price}>{formatMoney(price)}</Box>
                <Box className={styles.revision}>{needsRevision && 'Требует доработок'}</Box>
            </Box>
        </Box>
    );
};
