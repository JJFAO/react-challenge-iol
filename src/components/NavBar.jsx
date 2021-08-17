import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavBar({ children }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img style={{width: '6.5rem'}} src={logo} alt="logo" />
        </Navbar.Brand>

        <Button as={NavLink} to="/favorites" className="py-1 me-auto ms-4" variant="outline-primary">
          Favoritos
        </Button>

        {children}
      </Container>
    </Navbar>
  );
}
