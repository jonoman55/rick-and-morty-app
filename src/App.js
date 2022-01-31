import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/Container';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import AllCharactersPage from './pages/AllCharactersPage';
import NotFoundPage from './pages/NotFoundPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

// TODO : Implement a Footer and BackToTop button
// TODO : Add a page that is themed after a portal that will send you to a random location w/ associated characters
const App = () => {
    const theme = useSelector((state) => state.theme);
    const activeTheme = createTheme(theme.darkTheme ? darkTheme : lightTheme);
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <Router>
                <Header />
                <Container component='main'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/characters'>
                            <Route index element={<CharactersPage />} />
                            <Route path='all' element={<AllCharactersPage />} />
                            <Route path=':id' element={<CharacterPage />} />
                        </Route>
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default App;