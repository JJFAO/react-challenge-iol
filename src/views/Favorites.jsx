import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavBar from 'components/NavBar';
import backIcon from '../assets/back.svg';
import { useFetch } from 'hooks/useFetch';
import { API_URL } from 'config/api';
import CharacterCard from 'components/CharacterCard';
import SpinLoader from 'components/SpinLoader';
import { useFavoritesContext } from '../context/favoritesContext';

export default function Favorites() {
  const history = useHistory();
  const { favorites } = useFavoritesContext();
  const [characters, isLoading] = useFetch(`${API_URL}/character/${favorites}`, []);

  const charactersMap = characters.map((char) => <CharacterCard key={char.id} character={char} />);

  return (
    <>
      <NavBar>
        <Button onClick={history.goBack} className="py-1" variant="outline-primary">
          <img style={{ width: '1.8rem' }} src={backIcon} alt="" />
        </Button>
      </NavBar>

      <Container style={{ minHeight: '80vh' }}>
        <div className="d-flex flex-wrap justify-content-center">
          {/* Characters cards ↓ */}
          {charactersMap}

          <div className="position-absolute" style={{ top: '50vh', left: '50%' }}>
            {<SpinLoader size="lg" isLoading={isLoading} style={{ marginLeft: '-50%' }} />}
          </div>
        </div>
      </Container>
    </>
  );
}
