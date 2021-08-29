import { useHistory } from 'react-router-dom';
import { API_URL } from '../config/api';
import { useFetch } from '../hooks/useFetch';
import { useScrollToTopOnMount } from '../hooks/useScrollToTop';
import { useFavoritesContext } from '../context/favoritesContext';
//Components
import { Button, Card, Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import CharacterCard from '../components/CharacterCard';
import SpinLoader from '../components/SpinLoader';
//Images
import backIcon from '../assets/back.svg';

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

      <Container className="min-h80">
        <h2 className="text-center text-white mt-3 glass-title m-auto pt-1 pb-2">Favoritos</h2>
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

          {/* No results message ↓ */}
          {!characters.length && !isLoading && (
            <Card className="glass-card text-white-50 p-5 mt-5">
              <Card.Title>Aún no tienes ningún favorito</Card.Title>
            </Card>
          )}

          <div className="position-absolute center-spinner">
            {<SpinLoader size="lg" isLoading={isLoading} />}
          </div>
        </div>
      </Container>
    </>
  );
}
