import CharacterDetail from 'components/CharacterDetail';
import NavBar from 'components/NavBar';
import { Button, Container } from 'react-bootstrap';
import backIcon from '../assets/back.svg';
import { useHistory, useParams } from 'react-router-dom';
import { API_URL } from 'config/api';
import { useFetch } from 'hooks/useFetch';
import SpinLoader from 'components/SpinLoader';

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

      <Container className="d-flex">
        <CharacterDetail character={character} />
        <div className="position-absolute" style={{ top: '50vh', left: '50%' }}>
          {<SpinLoader size="lg" isLoading={isLoading} style={{ marginLeft: '-50%' }} />}
        </div>
      </Container>
    </>
  );
}
