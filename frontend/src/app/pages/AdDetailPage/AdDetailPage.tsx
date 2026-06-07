import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { useAd } from '@/features/Ad/api/getAd';
import { AdDetail } from '@/features/Ad/AdDetail';

export const AdDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useAd(id);

    if (isLoading) {
        return <Box>Загрузка</Box>;
    }

    if (!data) {
        return <Box>Объявление не найдено</Box>;
    }

    const { title, needsRevision, category, price, params, updatedAt, description, createdAt } =
        data;

    return (
        <AdDetail
            title={title}
            price={price}
            category={category}
            needsRevision={needsRevision}
            id={id}
            description={description}
            createdAt={createdAt}
            params={params}
            updatedAt={updatedAt}
        />
    );
};
