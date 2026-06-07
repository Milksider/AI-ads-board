import { Box } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Link } from 'react-router-dom';

import styles from './Heading.module.scss';

import type { AdDetail } from '@/entities/Ad';
import { formatMoney, formatDate } from '@/shared/lib';
import { pages } from '@/app/config/pages.config';

type HeadingProps = Pick<AdDetail, 'title' | 'id' | 'updatedAt' | 'createdAt' | 'price'>;

export const Heading = ({ title, id, price, updatedAt, createdAt }: HeadingProps) => {
    return (
        <Box className={styles.heading}>
            <Box>
                <Box as="h1" className={styles.title}>
                    {title}
                </Box>
                <Link to={pages.AD_EDIT(id)} className={styles.edit}>
                    Редактировать <BorderColorOutlinedIcon width={16} height={16} />
                </Link>
            </Box>
            <Box className={styles.right}>
                <Box as="h2" className={styles.title}>
                    {formatMoney(price)}
                </Box>
                <Box className={styles.date}>Опубликовано: {formatDate(createdAt)}</Box>
                <Box className={styles.date}>Отредактировано: {formatDate(updatedAt)}</Box>
            </Box>
        </Box>
    );
};
