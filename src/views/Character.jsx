import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from '../config/api';
import { useFetch } from '../hooks/useFetch';
//Components
import { Button, Container } from 'react-bootstrap';
import CharacterDetail from '../components/CharacterDetail';
import NavBar from '../components/NavBar';
import SpinLoader from '../components/SpinLoader';
//Images
import backIcon from '../assets/back.svg';

export default function Character() {
  const history = useHistory();
  const { charId } = useParams();
  const [character, isLoading] = useFetch(`${API_URL}/character/${charId}`);

  return (
    <>
      <NavBar>
        <Button onClick={history.goBack} className="py-1" variant="outline-primary">
          <img style={{ width: '1.8rem' }} src={backIcon} alt="" />
        </Button>
      </NavBar>

      <h2 className="text-center text-white mt-3 glass-title m-auto pt-1 pb-2">{character?.name}</h2>

      <Container className="d-flex">
        <CharacterDetail character={character} />

        <div className="position-absolute center-spinner">
          {<SpinLoader size="lg" isLoading={isLoading}/>}
        </div>
      </Container>
    </>
  );
}
