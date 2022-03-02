import { lazy } from 'react';
// NOTE : HashRouter added for netlify
import { HashRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const CharactersPage = lazy(() => import('../pages/CharactersPage'));
const CharacterPage = lazy(() => import('../pages/CharacterPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const EpisodesPage = lazy(() => import('../pages/EpisodesPage'));
const EpisodePage = lazy(() => import('../pages/EpisodePage'));
const LocationsPage = lazy(() => import('../pages/LocationsPage'));
const LocationPage = lazy(() => import('../pages/LocationPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
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
            </Switch>
        </Layout>
    </Router>
);

export default Routes;