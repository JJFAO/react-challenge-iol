import { Badge, Card, Ratio } from 'react-bootstrap';

export default function CharacterDetail({ character }) {
  const { id, name, status, species, location, origin } = character;
  const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  return (
    <Card className="mx-auto my-4 p-1 glass-card text-light" style={{ width: '32rem' }}>
      <Ratio aspectRatio={1 / 1.001}>
        <Card.Img variant="top" src={imageUrl} />
      </Ratio>

      <Card.Body>
        <Card.Title style={{ height: '2em', marginBottom: '15px' }}>{name}</Card.Title>

        <p style={{ height: '2em', marginBottom: '25px' }}>{species}</p>
        <p style={{ height: '2em', marginBottom: '25px' }}>{origin?.name}</p>
        <p style={{ height: '2em', marginBottom: '25px' }}>{location?.name}</p>
      </Card.Body>

      <Card.Footer>
        <Badge bg={status}>{status}</Badge>
      </Card.Footer>
    </Card>
  );
}
