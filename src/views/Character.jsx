import CharacterDetail from 'components/CharacterDetail';
import NavBar from 'components/NavBar';
import { Button } from 'react-bootstrap';
import backIcon from '../assets/back.svg';
import { useHistory } from 'react-router-dom';

export default function Character() {
  const history = useHistory();
  return (
    <>
      <NavBar>
        <Button onClick={history.goBack} className="py-1" variant="primary">
          <img style={{ width: '1.8rem' }} src={backIcon} alt="" />
        </Button>
      </NavBar>

      <CharacterDetail />
    </>
  );
}
