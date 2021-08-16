import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar({children}) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Rick & Morty</Navbar.Brand>

        {children}
      </Container>
    </Navbar>
  );
}
