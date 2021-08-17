import Routes from './Routes';
import './App.scss';
import { FavoritesProvider } from 'context/favoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Routes />
    </FavoritesProvider>
  );
}

export default App;
