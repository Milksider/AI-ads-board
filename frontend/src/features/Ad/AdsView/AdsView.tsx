import { Box } from '@mui/material';

import styles from './AdsView.module.scss';
import { useAdsViewContext } from './provider';

import ListIcon from '@/shared/assets/list.icon.svg?react';
import TileIcon from '@/shared/assets/tile.icon.svg?react';
import { classNames } from '@/shared/lib';

export const AdsView = () => {
    const { view, onChangeView } = useAdsViewContext();

    return (
        <Box className={styles.wrapper}>
            <button title="Плитка" onClick={() => onChangeView('tile')}>
                <TileIcon
                    className={classNames(styles.icon, { [styles.active]: view === 'tile' })}
                />
            </button>
            <Box className={styles.separator} />
            <button title="Список" onClick={() => onChangeView('list')}>
                <ListIcon
                    className={classNames(styles.icon, { [styles.active]: view === 'list' })}
                />
            </button>
        </Box>
    );
};
