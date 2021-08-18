import './App.scss';
import Routes from './Routes';
import { FavoritesProvider } from 'context/favoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Routes />
    </FavoritesProvider>
  );
}

export default App;
