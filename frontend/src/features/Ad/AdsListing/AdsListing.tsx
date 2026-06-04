import { Box } from '@mui/material';

import styles from './AdsListing.module.scss';

import { useAds } from '@/features/Ad/api';
import { AdCard } from '@/entities/Ad';
import { Pagination } from '@/shared/ui';
import { useAdsViewContext } from '@/features/Ad/AdsView';

export const AdsListing = () => {
    const { data, page, fetchPage } = useAds();
    const { view } = useAdsViewContext();

    if (!data) {
        return <div>Ошибка загрузки объявлений</div>;
    }

    const { items, total } = data;

    const totalPages = Math.ceil(total / 10);

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.listing}>
                {items.map(({ title, price, category, needsRevision }) => (
                    <AdCard
                        key={crypto.randomUUID()}
                        title={title}
                        price={price}
                        category={category}
                        needsRevision={needsRevision}
                        view={view}
                    />
                ))}
            </Box>

            <Pagination totalPages={totalPages} currentPage={page} onChangePage={fetchPage} />
        </Box>
    );
};
