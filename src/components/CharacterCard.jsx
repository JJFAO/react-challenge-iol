import { Badge, Button, Card, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './characterCard.scss'
import starFilled from '../assets/starFilled.svg';
import starEmpty from '../assets/starEmpty.svg';

export default function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  const { id, name, status, species, location, origin } = character;
  const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  return (
    <Card className="m-3 position-relative" style={{ width: '18rem' }}>
      <Ratio aspectRatio={1 / 1.001}>
        <Card.Img variant="top" src={imageUrl} />
      </Ratio>

      <button className="btn position-absolute end-0" onClick={onToggleFavorite}>
        <img className="star star-shadow" src={starFilled} aria-label="Agregar/quitar favorito" />
        <img className="star" src={isFavorite ? starFilled : starEmpty} aria-label="Agregar/quitar favorito" />
      </button>

      <Card.Body className="text-center">
        <Card.Title style={{ height: '2em', marginBottom: '15px' }}>{name}</Card.Title>

        <p style={{ height: '2em', marginBottom: '25px' }}>{species}</p>
        <p style={{ height: '2em', marginBottom: '25px' }}>{origin?.name}</p>
        <p style={{ height: '2em', marginBottom: '25px' }}>{location.name}</p>

        <Button className="mb-1" as={Link} to={`character/${id}`} variant="primary">
          Ver detalle
        </Button>
      </Card.Body>

      <Card.Footer>
        <Badge bg={status}>{status}</Badge>
      </Card.Footer>
    </Card>
  );
}
