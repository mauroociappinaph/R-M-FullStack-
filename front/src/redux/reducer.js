import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

export const initialState = {
  myFavorites: [],
  allCharacters: [], // agregar nueva propiedad de estado
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload], // agregar copia de allCharacters
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
        allCharacters: state.allCharacters.filter((char) => char.id !== action.payload), // agregar copia de allCharacters
      };

    case "FILTER":
      const { allCharacters } = state;
      const { payload: gender } = action;

      const filteredFavorites = allCharacters.filter((char) => char.gender === gender);

      return {
        ...state,
        myFavorites: filteredFavorites,
      };

    case "ORDER":
      const { payload: id } = action;
      const { allCharacters: characters } = state;

      let orderedFavorites = [...characters];

      if (id === "Ascendente") {
        orderedFavorites.sort((a, b) => a.id - b.id);
      } else if (id === "Descendente") {
        orderedFavorites.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: orderedFavorites,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
