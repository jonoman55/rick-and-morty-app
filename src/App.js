import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, LoadingContainer } from './components/lazy';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const Routes = lazy(() => import('./routes'));

// TODO : Implement a Footer and PortalPage
const App = () => {
    const theme = useSelector((state) => state.theme);
    const activeTheme = createTheme(theme.darkTheme ? darkTheme : lightTheme);
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
                <Suspense fallback={<LoadingContainer />}>
                    <Routes />
                </Suspense>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default App;