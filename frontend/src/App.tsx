import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import { AppRoutes, theme } from './app/config';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <AppRoutes />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
