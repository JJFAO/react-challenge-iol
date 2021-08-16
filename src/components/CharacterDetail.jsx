import axios from 'axios';
import { API_URL } from 'config/api';
import { useEffect, useState } from 'react';
import { Button, Card, Ratio } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import defaultImage from 'assets/defaultImage.png'

export default function CharacterDetail() {
  const { charId } = useParams();
  const [character, setCharacter] = useState({});
  const { name, status, species, location, origin } = character;
  const imageUrl = `${API_URL}/character/avatar/${charId}.jpeg`;

  useEffect(() => {
    (async function () {
      const params = { count: 15, page: 2 };
      const res = await axios.get(`${API_URL}/character/${charId}`, { params });
      setCharacter(res.data);
    })();
  }, [charId]);

  return (
    <div className="d-flex justify-content-center">
      <Card className="m-3" style={{ width: '32rem' }}>
        <Ratio aspectRatio={1 / 1.001}>
          <Card.Img variant="top" src={imageUrl} />
        </Ratio>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{species}</p>
          <p>{origin?.name}</p>
          <p>{location?.name}</p>
          <Button className="float-end" variant="primary">
            Ver detalle
          </Button>
        </Card.Body>
        <Card.Footer>
          <span>{status}</span>
        </Card.Footer>
      </Card>
    </div>
  );
}
