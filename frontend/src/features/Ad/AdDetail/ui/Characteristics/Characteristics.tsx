import { Box } from '@mui/material';

import styles from './Characteristics.module.scss';
import { getCharacteristicValue } from '../../lib/getCharacteristicValue';

import type { AdDetail, CharacteristicKey } from '@/entities/Ad';
import { getCharacteristicTitle } from '@/features/Ad/AdDetail/lib';

type CharacteristicsProps = Pick<AdDetail, 'params'>;

export const Characteristics = ({ params }: CharacteristicsProps) => {
    return (
        <>
            <Box className={styles.title}>Характеристики</Box>
            {Object.keys(params).map((key) => {
                return (
                    <Box className={styles.wrapper} key={key}>
                        <Box className={styles.name}>
                            {getCharacteristicTitle(key as CharacteristicKey)}
                        </Box>
                        <Box className={styles.value}>
                            {getCharacteristicValue(
                                key as CharacteristicKey,
                                params[key] as string,
                            )}
                        </Box>
                    </Box>
                );
            })}
        </>
    );
};
