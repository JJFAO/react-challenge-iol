import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Favorites Context
export const FavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
});

function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const addFavorite = (favId) => {
    setFavorites((prev) => [...prev, favId]);
  };

  const removeFavorite = (favId) => {
    setFavorites((prev) => prev.filter((fav) => fav !== favId));
  };

  const toggleFavorite = (favId) => {
    const isFavored = favorites.some((fav) => fav === favId);
    if (isFavored) {
      removeFavorite(favId);
    } else {
      addFavorite(favId);
    }
  };

  return { favorites, toggleFavorite };
}

export const useFavoritesContext = () => useContext(FavoritesContext);

// Favorites Context Provider
export const FavoritesProvider = ({ children }) => {
  return <FavoritesContext.Provider value={useFavorites()}>{children}</FavoritesContext.Provider>;
};
