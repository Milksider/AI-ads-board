import { Box, Divider } from '@mui/material';

import styles from './AdDetail.module.scss';

import type { AdDetail } from '@/entities/Ad';
import { Content, Heading } from '@/features/Ad/AdDetail/ui';

type AdDetailProps = AdDetail;

export const AdDetail = ({
    title,
    id,
    category,
    needsRevision,
    price,
    params,
    updatedAt,
    description,
    createdAt,
}: AdDetailProps) => {
    return (
        <Box className={styles.page}>
            <Heading
                createdAt={createdAt}
                updatedAt={updatedAt}
                id={id}
                price={price}
                title={title}
            />
            <Divider />
            <Content
                params={params}
                description={description}
                category={category}
                needsRevision={needsRevision}
            />
        </Box>
    );
};
