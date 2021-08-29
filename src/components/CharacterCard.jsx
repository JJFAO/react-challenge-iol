import { Badge, Button, Card, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './characterCard.scss';
// Images
import starFilled from '../assets/starFilled.svg';
import starEmpty from '../assets/starEmpty.svg';

export default function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  const { id, name, status, species, location, origin } = character;
  const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  return (
    <Card className="m-3 p-2 position-relative glass-card text-light" style={{ width: '18rem' }}>
      <Ratio aspectRatio={1 / 1.001}>
        <Card.Img variant="top" src={imageUrl} />
      </Ratio>

      <button className="btn position-absolute end-0" onClick={onToggleFavorite}>
        <img className="star star-shadow" src={starFilled} aria-label="Agregar/quitar favorito" />
        <img className="star" src={isFavorite ? starFilled : starEmpty} aria-label="Agregar/quitar favorito" />
      </button>

      <Card.Body className="text-center">
        <Card.Title title={name} className="text-truncate">{name}</Card.Title>

        <p title={species} className="text-truncate">{species}</p>
        <p title={origin?.name} className="text-truncate">{origin?.name}</p>
        <p title={location.name} className="text-truncate">{location.name}</p>

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
