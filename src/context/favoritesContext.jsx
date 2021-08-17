import { useLocalStorage } from "hooks/useLocalStorage";
import { createContext, useContext } from "react";

/* Favorites Context */
export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => { },
});

function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [1,2,3]);

  return { favorites, setFavorites };
}

export const useFavoritesContext = () => useContext(FavoritesContext);


/* Favorites Context Provider */
export const FavoritesProvider = ({ children }) => {
  return <FavoritesContext.Provider value={useFavorites()}>{children}</FavoritesContext.Provider>;
};
