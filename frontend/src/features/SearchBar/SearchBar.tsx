import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { ChangeEvent} from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/shared/lib';

const searchKey = 'q';

export const SearchBar = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 300);

    const [searchParams, setSearchParams] = useSearchParams();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
    };

    useEffect(() => {
        const searchValue = debouncedSearch.trim();
        const shouldSearch = searchValue.length > 3 || searchValue.length === 0;
        if (shouldSearch) {
            const newSearchParams = {
                ...searchParams,
                [searchKey]: searchValue,
            };
            setSearchParams(newSearchParams);
        }
    }, [debouncedSearch, setSearchParams, searchParams]);

    return (
        <div>
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
        </div>
    );
};
