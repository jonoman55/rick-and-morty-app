import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { ErrorFallback, LoadingContainer } from './components/lazy';
import { lightTheme, darkTheme } from './theme';

const Routes = lazy(() => import('./routes'));

// TODO : Create PortalPage
// TODO : Fix project file folder structure
// TODO : Convert all components to styled components
// TODO : Remove any console.logs in the project when site is finished
// TODO : create index.js files in each folder for easier import/exports
// TODO : Find a better favicon
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