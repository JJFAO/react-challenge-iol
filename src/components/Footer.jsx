import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../assets/icon.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark mt-4 py-4">
      <Container>
        <Row className="align-items-center" style={{ minHeight: '6rem' }}>
          <Col className="d-none d-md-block" md="4">
            <Link to="/404">
              <Image src={logo} alt="logo" style={{ height: '5rem' }} />
            </Link>
          </Col>

          <Col className="d-flex flex-column align-items-center mb-3 mb-md-0" md="4">
            <a className="d-flex justify-content-center mb-2" target="_blank" rel="noreferrer" href="https://github.com/JJFAO">
              <img className="me-2" src={github} alt="" />
              <h5 className="mb-1">Github</h5>
            </a>
            <a className="d-flex justify-content-center" target="_blank" rel="noreferrer" href="https://linkedin.com/in/juan-jose-f-alonso">
              <img className="me-2" src={linkedin} alt="" />
              <h5 className="mb-0">linkedIn</h5>
            </a>
          </Col>

          <Col className="text-center text-md-end" md="4">
            <h5 className="text-white mb-2">Copyright JJFAO®</h5>
            <h5 className="text-white mb-0">Tucumán - Argentina 2021</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
