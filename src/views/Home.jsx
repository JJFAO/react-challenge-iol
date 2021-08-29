import { useCallback, useState } from 'react';
import { API_URL } from '../config/api';
import { useFetchAll } from '../hooks/useFetch';
import { useFavoritesContext } from '../context/favoritesContext';
import { useScrollToTopOnMount } from '../hooks/useScrollToTop';
import { usePaginate } from '../hooks/usePaginate';
// Components
import { Card } from 'react-bootstrap';
import SelectLocation from '../components/SelectLocation';
import CharacterCard from '../components/CharacterCard';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import SpinLoader from '../components/SpinLoader';

export default function Home() {
  useScrollToTopOnMount();
  const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
  const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character`);
  const [location, setLocation] = useState('');
  const filterByLocation = useCallback((char) => !location || char.location.name === location, [location]);
  const { results: characters, page, setPage, totalPages, /* limit, setLimit */ } = usePaginate(allCharacters, filterByLocation);
  const { toggleFavorite, favorites } = useFavoritesContext();

  const handleSelect = (value) => {
    setPage(1);
    setLocation(value);
  };

  const isFavorite = (id) => favorites.includes(id);

  return (
    <>
      <NavBar>
        <SelectLocation
          location={location}
          locations={locations}
          onSelect={handleSelect}
          isLoading={isLoadingLocations}
        />
      </NavBar>

      <div className="container min-h80">
        <h2 className="text-center text-white mt-3 glass-title m-auto pt-1 pb-2">Personajes</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {/* Characters cards ↓ */}
          {characters.map((char) => (
            <CharacterCard
              key={char.id}
              character={char}
              onToggleFavorite={() => toggleFavorite(char.id)}
              isFavorite={isFavorite(char.id)}
            />
          ))}

          {/* No results message ↓ */}
          {!characters.length && !isLoadingCharacters && (
            <Card className="glass-card text-white-50 p-5 mt-5">
              <Card.Title>Sin resultados</Card.Title>
            </Card>
          )}

          <div className="position-absolute center-spinner">
            {<SpinLoader size="lg" isLoading={isLoadingCharacters} />}
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
