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
        MuiInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F6F6F8',
                    width: '100%',
                    height: '32px',
                    borderRadius: '8px',
                    border: 'none',
                    padding: '5px 12px',
                    color: '#707176',
                    '&:before': {
                        border: 'none !important',
                    },
                    '&:after': {
                        border: 'none !important',
                    },
                },
            },
        },
    },
});
