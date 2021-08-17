import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar({ children }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Rick & Morty
        </Navbar.Brand>

        <Button as={NavLink} to="/favorites" className="py-1" variant="outline-primary">
          Favoritos
        </Button>

        {children}
      </Container>
    </Navbar>
  );
}
