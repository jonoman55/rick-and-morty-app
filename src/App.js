import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/Container';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import AllCharactersPage from './pages/AllCharactersPage';
import NotFoundPage from './pages/NotFoundPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './contexts/ThemeContext';
import { light, dark } from './theme';

// TODO : Create mui theme and context provider
// TODO : Implement a Footer and BackToTop button
// TODO : Add a page that is themed after a portal that will send you to a random location w/ associated characters
// TODO : Figure out how to use redux to manage the theme
const App = () => {
    const { theme } = useThemeContext();
    const activeTheme = createTheme(theme ? dark : light);
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