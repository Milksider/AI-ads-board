import { FormControl, MenuItem, Select } from '@mui/material';
import type { ChangeEvent} from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getDefaultSort } from './lib';
import type { SortValue } from './types';
import { sortOptions } from './constants';

export const AdsSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState<SortValue>(getDefaultSort(searchParams));

    const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value as SortValue;
        setSort(value);

        const currentSearchParams = new URLSearchParams(searchParams);

        switch (value) {
            case 'sortColumn=createdAt&sortDirection=asc':
                currentSearchParams.set('sortColumn', 'createdAt');
                currentSearchParams.set('sortDirection', 'asc');
                break;
            case 'sortColumn=createdAt&sortDirection=desc':
                currentSearchParams.set('sortColumn', 'createdAt');
                currentSearchParams.set('sortDirection', 'desc');
                break;
            case 'sortColumn=title&sortDirection=asc':
                currentSearchParams.set('sortColumn', 'title');
                currentSearchParams.set('sortDirection', 'asc');
                break;
            case 'sortColumn=title&sortDirection=desc':
                currentSearchParams.set('sortColumn', 'title');
                currentSearchParams.set('sortDirection', 'desc');
                break;
        }

        setSearchParams(currentSearchParams);
    };

    return (
        <FormControl fullWidth>
            <Select
                id="ads-sort"
                name="ads-sort"
                value={sort}
                title="Сортировка"
                onChange={handleChange}
            >
                {sortOptions.map(({ title, value }) => (
                    <MenuItem key={title} value={value}>
                        {title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
