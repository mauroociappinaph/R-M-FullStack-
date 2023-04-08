export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";

/**
En resumen, ADD_FAVORITE es una constante que define el tipo de acción en Redux. 
Es una etiqueta que se utiliza para indicar que se quiere agregar 
un nuevo elemento a la lista de favoritos.
 */

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};


export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};



/**
En resumen, estas dos funciones son como hechizos que los estudiantes pueden usar para agregar 
o eliminar cuentos de su lista de favoritos. Los type son como el nombre del hechizo y 
el payload es como la información del cuento que se va a agregar o eliminar de la lista.
 
 */