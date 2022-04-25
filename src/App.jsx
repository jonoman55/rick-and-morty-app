import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { SnackbarProvider } from './contexts/AlertContext';
import { ErrorFallback, LoadingContainer } from './components/lazy';
import { lightTheme, darkTheme } from './theme';

const Routes = lazy(() => import('./routes'));

// TODO : Consolidate Character, Location and Episode Details styled components into one file
const App = () => {
    const theme = useSelector((state) => state.theme);
    const activeTheme = createTheme(theme.darkTheme ? darkTheme : lightTheme);
    return (
        <ThemeProvider theme={activeTheme}>
            <SnackbarProvider>
                <CssBaseline />
                <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
                    <Suspense fallback={<LoadingContainer />}>
                        <Routes />
                    </Suspense>
                </ErrorBoundary>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;