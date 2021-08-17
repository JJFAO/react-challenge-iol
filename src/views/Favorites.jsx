import { useHistory } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import NavBar from 'components/NavBar';
import backIcon from '../assets/back.svg';
import { useFetch } from 'hooks/useFetch';
import { API_URL } from 'config/api';
import CharacterCard from 'components/CharacterCard';
import SpinLoader from 'components/SpinLoader';
import { useFavoritesContext } from '../context/favoritesContext';
import { useScrollToTopOnMount } from 'hooks/useScrollToTop';

export default function Favorites() {
  useScrollToTopOnMount();
  const history = useHistory();
  const { favorites, toggleFavorite } = useFavoritesContext();
  const favsParam = favorites.length ? favorites : 0;
  const [characters, isLoading] = useFetch(`${API_URL}/character/[${favsParam}]`, []);

  const isFavorite = (id) => {
    return favorites.some((fav) => fav === id);
  };

  return (
    <>
      <NavBar>
        <Button onClick={history.goBack} className="py-1" variant="outline-primary">
          <img style={{ width: '1.8rem' }} src={backIcon} alt="" />
        </Button>
      </NavBar>

      <Container style={{ minHeight: '80vh' }}>
        <h2 className="text-center mt-3">Favoritos</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {/* Favorite Characters cards ↓ */}
          {characters.map((char) => (
            <CharacterCard
              key={char.id}
              character={char}
              onToggleFavorite={() => toggleFavorite(char.id)}
              isFavorite={isFavorite(char.id)}
            />
          ))}

          <div className="position-absolute" style={{ top: '50vh', left: '50%' }}>
            {<SpinLoader size="lg" isLoading={isLoading} style={{ marginLeft: '-50%' }} />}
          </div>
        </div>
      </Container>
    </>
  );
}
