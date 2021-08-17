import { Badge, Button, Card, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import defaultImage from 'assets/defaultImage.png'

export default function CharacterCard({ character }) {
  const { id, name, status, species, location, origin } = character;
  const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Ratio aspectRatio={1 / 1.001}>
        <Card.Img variant="top" src={imageUrl} />
      </Ratio>

      <Card.Body>
        <Card.Title style={{ height: '2em', marginBottom: '15px' }}>{name}</Card.Title>

        <p style={{ height: '2em', marginBottom: '25px' }}>{species}</p>
        <p style={{ height: '2em', marginBottom: '25px' }}>{origin?.name}</p>
        <p style={{ height: '2em', marginBottom: '25px' }}>{location?.name}</p>

        <Button as={Link} to={`character/${id}`} className="float-end" variant="primary">
          Ver detalle
        </Button>
      </Card.Body>

      <Card.Footer>
        <Badge bg={status}>{status}</Badge>
      </Card.Footer>
    </Card>
  );
}
