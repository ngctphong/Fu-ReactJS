import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetupId => {},
});

export const FavoritesContextProvider = props => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorites = favoriteMeetup => {
    setFavorites(prevState => {
      return [...prevState, favoriteMeetup];
    });
  };

  const handleRemoveFavorites = meetupId => {
    setFavorites(prevState => {
      return prevState.filter(meetup => meetup.id !== meetupId);
    });
  };

  const handleItemIsFavorites = meetupId => {
    return favorites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: handleAddFavorites,
    removeFavorite: handleRemoveFavorites,
    itemIsFavorite: handleItemIsFavorites,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
