import { Box } from '@mui/material';
import DefaultImage from 'public/images/default-image.png';

import styles from './Content.module.scss';

import type { AdDetail } from '@/entities/Ad';
import { Characteristics, Revision } from '@/features/Ad/AdDetail/ui';

type ContentProps = Pick<AdDetail, 'params' | 'description' | 'category' | 'needsRevision'>;

export const Content = ({ description, params, category, needsRevision }: ContentProps) => {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.content}>
                <img
                    width={480}
                    height={360}
                    src={DefaultImage}
                    title="Изображение объявления"
                    alt="Изображение объявления"
                />
                <Box>
                    {needsRevision && (
                        <Revision params={params} description={description} category={category} />
                    )}
                    <Characteristics params={params} />
                </Box>
            </Box>
            <Box>
                <Box className={styles.title}>Описание</Box>
                {description || <Box>Отсутствует</Box>}
            </Box>
        </Box>
    );
};
