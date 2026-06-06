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
        MuiSelect: {
            styleOverrides: {
                root: {
                    border: '4px solid #F4F4F6',
                    height: '32px',
                    '&.MuiOutlinedInput-notchedOutline': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&::before': {
                        display: 'none',
                    },
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: 0,
                    margin: 0,
                    minHeight: 'fit-content',
                    '&.Mui-expanded': {
                        minHeight: 'fit-content',
                    },
                },
                content: {
                    margin: 0,
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '8px 0',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '0 9px 0 0',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#F0F0F0',
                    margin: '10px 0',
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    margin: '0',
                },
                label: {
                    fontSize: '14px',
                    lineHeight: '24px',
                    fontWeight: '400',
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: '44px',
                    height: '22px',
                    padding: 0,
                    borderRadius: '16px',
                },
                thumb: {
                    width: '18px',
                    height: '18px',
                },
                switchBase: {
                    top: '2px',
                    left: '2px',
                    padding: 0,
                    '&.Mui-checked': {
                        transform: 'translateX(22px)',
                    },
                },
            },
        },
    },
});
