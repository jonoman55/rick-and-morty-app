import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import SearchPage from './pages/SearchPage';
import EpisodesPage from './pages/EpisodesPage';
import EpisodePage from './pages/EpisodePage';
import LocationsPage from './pages/LocationsPage';
import LocationPage from './pages/LocationPage';
import NotFoundPage from './pages/NotFoundPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

// TODO : Implement a Footer and PortalPage
// TODO : Implement code splitting via React Suspense, lazy w/ react-error-boundary
const App = () => {
    const theme = useSelector((state) => state.theme);
    const activeTheme = createTheme(theme.darkTheme ? darkTheme : lightTheme);
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/characters'>
                            <Route index element={<CharactersPage />} />
                            <Route path=':id' element={<CharacterPage />} />
                        </Route>
                        <Route path='/episodes'>
                            <Route index element={<EpisodesPage />} />
                            <Route path=':id' element={<EpisodePage />} />
                        </Route>
                        <Route path='/locations'>
                            <Route index element={<LocationsPage />} />
                            <Route path=':id' element={<LocationPage />} />
                        </Route>
                        <Route path='/search' element={<SearchPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
};

export default App;