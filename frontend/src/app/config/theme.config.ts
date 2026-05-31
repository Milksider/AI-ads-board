import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    border: '1px solid #D9D9D9',
                    borderRadius: '8px',
                    '&.Mui-selected': {
                        color: '#1890FF',
                        borderColor: '#1890FF',
                        backgroundColor: 'transparent',
                    },
                    '&.Mui-disabled': {
                        color: '#D9D9D9',
                        opacity: 1,
                    },
                },
            },
        },
    },
});
