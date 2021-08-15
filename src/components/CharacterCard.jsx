import { Button, Card } from 'react-bootstrap';

export default function CharacterCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      <Card.Body>
        <Card.Title>name</Card.Title>
        <Card.Text>
          <p>Status</p>
          <p>species</p>
          <p>origin</p>
          <p>location</p>
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  );
}
