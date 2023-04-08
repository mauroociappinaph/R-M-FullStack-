import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const [genderFilter, setGenderFilter] = useState("all");
  const dispatch = useDispatch();

  const handleGenderFilterChange = (event) => {
    const selectedValue = event.target.value;
    setGenderFilter(selectedValue);
    dispatch(filterCards(selectedValue));
  };

  const handleOrderChange = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const filteredFavorites = genderFilter === "all" 
    ? favorites 
    : favorites.filter((favorite) => favorite.gender === genderFilter);

  return (
    <div>
      <div>
        <select name="ordenamiento" onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div>
        <select name="filtrado" value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="all">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {filteredFavorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
