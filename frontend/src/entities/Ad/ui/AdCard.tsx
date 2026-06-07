import { Box } from '@mui/material';
import DefaultImage from 'public/images/default-image.png';
import { Link } from 'react-router-dom';

import styles from './AdCard.module.scss';

import type { AdType } from '@/entities/Ad';
import { classNames, formatMoney } from '@/shared/lib';
import { getCategoryName } from '@/entities/Ad';
import type { View } from '@/features/Ad/AdsView/types';
import { pages } from '@/app/config/pages.config';

interface AdCardProps extends AdType {
    view: View;
}

export const AdCard = ({ title, price, needsRevision, category, view, id }: AdCardProps) => {
    const isListView = view === 'list';

    return (
        <Link
            to={pages.AD_DETAIL(id)}
            className={classNames(styles.wrapper, { [styles.list]: isListView })}
        >
            <img
                src={DefaultImage}
                title="Изображение объявления"
                alt="Изображение объявления"
                width={isListView ? 180 : 200}
                height={isListView ? 132 : 150}
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
        </Link>
    );
};
