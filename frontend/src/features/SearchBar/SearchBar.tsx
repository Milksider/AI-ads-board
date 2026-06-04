import { Box, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { SearchBarProps } from './types';

import { useDebounce } from '@/shared/lib';

const searchKey = 'q';

export const SearchBar = ({ className }: SearchBarProps) => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 300);

    const [searchParams, setSearchParams] = useSearchParams();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
    };

    useEffect(() => {
        const currentSearch = searchParams.get(searchKey);
        const searchValue = debouncedSearch.trim();
        const shouldSearch =
            (searchValue.length > 3 || searchValue.length === 0) && currentSearch !== searchValue;

        if (shouldSearch) {
            const currentSearchParams = new URLSearchParams(searchParams);
            currentSearchParams.set(searchKey, searchValue);
            currentSearchParams.set('skip', '0');

            setSearchParams(currentSearchParams);
        }
    }, [debouncedSearch, setSearchParams, searchParams]);

    return (
        <Box className={className}>
            <Input
                value={search}
                onChange={onChange}
                id="search"
                name="search"
                placeholder="Найти объявление..."
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </Box>
    );
};
