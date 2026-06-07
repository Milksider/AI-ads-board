import { Box } from '@mui/material';

import styles from './Revision.module.scss';
import { getCharacteristicTitle, getRevisionData } from '../../lib';

import type { AdDetail } from '@/entities/Ad';
import Circle from '@/shared/assets/exclamation-circle.icon.svg?react';

type RevisionProps = Pick<AdDetail, 'params' | 'category' | 'description'>;

export const Revision = ({ params, category, description }: RevisionProps) => {
    const missingCharacteristics = getRevisionData(params, category);

    return (
        <Box className={styles.wrapper}>
            <Circle width={18} height={18} />
            <Box>
                <Box className={styles.title}>Требуются доработки</Box>
                <Box className={styles.description}>У объявления не заполнены поля:</Box>
                <Box as="ul" className={styles.list}>
                    {!description && <Box as="li">Описание</Box>}
                    {missingCharacteristics?.map((key) => (
                        <Box as="li" key={key}>
                            {getCharacteristicTitle(key)}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
