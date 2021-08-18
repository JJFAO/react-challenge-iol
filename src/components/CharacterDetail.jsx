import { Badge, Card, Ratio } from 'react-bootstrap';

export default function CharacterDetail({ character }) {
  const { id, name, status, species, location, origin } = character;
  const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  return (
    <Card className="mx-auto my-4 p-3 glass-card text-light" style={{ width: '32rem' }}>
      <Ratio aspectRatio={1 / 1.001}>
        <Card.Img variant="top" src={imageUrl} />
      </Ratio>

      <Card.Body>
        <Card.Title title={name} className="text-truncate">{name}</Card.Title>

        <p title={species} className="text-truncate"><span>Especie: </span> {species}</p>
        <p title={origin?.name} className="text-truncate"><span>Origen: </span>{origin?.name}</p>
        <p title={location?.name} className="text-truncate"><span>Localización: </span>{location?.name}</p>
      </Card.Body>

      <Card.Footer>
        <Badge bg={status}>{status}</Badge>
      </Card.Footer>
    </Card>
  );
}
