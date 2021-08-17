import { useEffect, useState } from 'react';
import CharacterCard from 'components/CharacterCard';
import { API_URL } from 'config/api';
import NavBar from 'components/NavBar';
import Pagination from 'components/Pagination';
import SpinLoader from 'components/SpinLoader';
import { useFetchAll } from 'hooks/useFetch';
import SelectLocation from 'components/SelectLocation';

export default function Landing() {
  const [characters, setCharacters] = useState([]);
  const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
  const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character`);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState();

  useEffect(() => {
    const limit = 4;
    const start = 0 + page * limit - limit;
    const end = start + limit;

    const charactersFiltered = allCharacters.filter((char) => !location || char.location.name === location);
    const charactersSlice = charactersFiltered.slice(start, end);
    setCharacters(charactersSlice);

    const totalPages = Math.ceil(charactersFiltered.length / limit);
    setTotalPages(totalPages);
  }, [allCharacters, page, location]);

  const charactersMap = characters.map((char) => <CharacterCard key={char.id} character={char} />);

  return (
    <>
      <NavBar>
        <SelectLocation locations={locations} onSelect={setLocation} isLoading={isLoadingLocations} />
      </NavBar>

      <div className="container" style={{ minHeight: '80vh' }}>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {/* Characters cards ↓ */}
          {charactersMap}

          {/* {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
          ))} */}

          <div className="position-absolute" style={{ top: '50vh', left: '50%' }}>
            {<SpinLoader size="lg" isLoading={isLoadingCharacters} style={{ marginLeft: '-50%' }} />}
          </div>
        </div>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onSetPage={setPage}
        isLoading={isLoadingCharacters}
      />
    </>
  );
}
