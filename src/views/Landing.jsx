import { useEffect, useState } from 'react';
import CharacterCard from 'components/CharacterCard';
import axios from 'axios';
import { API_URL } from 'config/api';
import NavBar from 'components/NavBar';
import Pagination from 'components/Pagination';
import SpinLoader from 'components/SpinLoader';
import { Form } from 'react-bootstrap';

export default function Landing() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await axios.get(`${API_URL}/location`);
      const locationsNames = res.data.results;
      setLocations(locationsNames);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const params = { count: 15, page, location };
      const res = await axios.get(`${API_URL}/character`, { params });
      setCharacters(res.data.results);
      setInfo(res.data.info);
      setIsLoading(false);
    })();
  }, [page, location]);

  const handleSelect = (e) => {
    setLocation(e.target.value);
  };

  const charactersMap = characters.map((char) => <CharacterCard key={char.id} character={char} />);

  return (
    <>
      <NavBar>
        <Form className="d-flex">
          <Form.Select
            placeholder="Localizaciones..."
            aria-label="Filtro por localización"
            className="mr-2"
            style={{ width: '12rem' }}
            onChange={handleSelect}
          >
            <option disabled>Localizaciones...</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </Form.Select>
        </Form>
      </NavBar>

      <div
        className="container d-flex flex-wrap justify-content-evenly align-items-center"
        style={{ minHeight: '100vh' }}
      >
        {charactersMap}

        <div className="position-absolute" style={{ top: '50vh' }}>
          {<SpinLoader size="lg" isLoading={isLoading} />}
        </div>
      </div>

      <Pagination currentPage={page} totalPages={info.pages} onSetPage={setPage} isLoading={isLoading} />
    </>
  );
}
