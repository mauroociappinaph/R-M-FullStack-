import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
/* connect te permite acceder al estado global de tu aplicación (lo que se almacena en Redux) 
desde cualquier componente de React. Esto es útil porque te permite compartir datos y 
funcionalidades entre componentes sin necesidad de pasar datos de un componente a otro 
a través de las propiedades. En lugar de eso, todos los componentes conectados a 
Redux pueden acceder al estado global y actualizarlo mediante acciones de Redux.
 */
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useEffect, useState } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        addFavorite,
        removeFavorite,
       
      });
    }
  };

  //?

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>🔥</button>
      ) : (
        <button onClick={handleFavorite}>🔥🔥</button>
      )}
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>Name: {name} </h2>
      </Link>
      <img src={image} alt="imagen" />
      <h2>Species: {species} </h2>
      <h2>Gender: {gender} </h2>
    </div>
  );
}

/*
 En resumen, la función Card nos permite mostrar información detallada sobre 
 un personaje mágico, así como un botón de cierre 
  y un enlace a una página de detalles para obtener aún más información sobre el personaje.
  */

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

/*
En resumen, mapDispatchToProps permite al componente llamar a las acciones de Redux 
(addFavorite y removeFavorite) a través de las propiedades del componente. 
Esto hace que sea fácil para el componente actualizar el estado de la aplicación global 
almacenado en Redux.
*/

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
