import { useEffect, useState } from 'react';
import CharacterCard from 'components/CharacterCard';
import { API_URL } from 'config/api';
import NavBar from 'components/NavBar';
import Pagination from 'components/Pagination';
import SpinLoader from 'components/SpinLoader';
import { useFetchAll } from 'hooks/useFetch';
import SelectLocation from 'components/SelectLocation';
import { useFavoritesContext } from '../context/favoritesContext';
import { useScrollToTopOnMount } from 'hooks/useScrollToTop';

export default function Landing() {
  useScrollToTopOnMount();
  const [characters, setCharacters] = useState([]);
  const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
  const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character`);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState('');
  const { toggleFavorite, favorites } = useFavoritesContext();

  useEffect(() => {
    const limit = 15;
    const start = 0 + page * limit - limit;
    const end = start + limit;

    const charactersFiltered = allCharacters.filter((char) => !location || char.location.name === location);
    const charactersSlice = charactersFiltered.slice(start, end);
    setCharacters(charactersSlice);

    const totalPages = Math.ceil(charactersFiltered.length / limit);
    setTotalPages(totalPages);
  }, [allCharacters, page, location]);

  const handleSelect = (value) => {
    setPage(1);
    setLocation(value);
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav === id);
  };

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
