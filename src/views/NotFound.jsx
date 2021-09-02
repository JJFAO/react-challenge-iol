import React from 'react';
import { useHistory } from 'react-router-dom';
//Components
import { Button, Card, Image } from 'react-bootstrap';
import NavBar from '../components/NavBar';
//Images
import backIcon from '../assets/back.svg';
import notfound from '../assets/notfound.png';

export default function NotFound() {
  const history = useHistory();
  return (
    <div>
      <NavBar>
        <Button onClick={history.goBack} className="py-1" variant="outline-primary">
          <img style={{ width: '1.8rem' }} src={backIcon} alt="Volver" />
        </Button>
      </NavBar>
      <Card style={{maxWidth: '1100px'}} className="glass-card text-white-50 p-5 mt-5 mx-auto">
        <Image src={notfound} />
        <Button onClick={history.goBack} className="py-1 btn-lg" variant="primary">
          Regresar
        </Button>
      </Card>
    </div>
  );
}
