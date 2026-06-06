import { useSearchParams } from 'react-router-dom';

export const useAdsFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const categories = searchParams.get('categories')?.split(',').filter(Boolean) || [];
    const needsRevision = searchParams.get('needsRevision') === 'true';

    const updateFilters = (updates: { categories: string[]; needsRevision: boolean }) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            if (updates.categories.length) {
                newParams.set('categories', updates.categories.join(','));
            } else {
                newParams.delete('categories');
            }
            newParams.set('needsRevision', String(updates.needsRevision));
            return newParams;
        });
    };

    const onChangeCategories = (category: string) => {
        const isRemoving = categories.includes(category);
        const newCategories = isRemoving
            ? categories.filter((el) => el !== category)
            : [...categories, category];
        updateFilters({ categories: newCategories, needsRevision });
    };

    const onChangeRevision = (_: unknown, value: boolean) => {
        updateFilters({ needsRevision: value, categories });
    };

    const resetFilters = () => {
        updateFilters({ categories: [], needsRevision: false });
    };

    return { categories, needsRevision, onChangeCategories, onChangeRevision, resetFilters };
};
