import { Pagination as MuiPagination } from '@mui/material';
import type { ChangeEvent } from 'react';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onChangePage: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onChangePage }: PaginationProps) => {
    const changePage = (event: ChangeEvent, page: number) => {
        onChangePage(page - 1);
    };

    return <MuiPagination page={currentPage} count={totalPages} onChange={changePage} />;
};
