import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;

/**
Este código está creando una tienda (store) de Redux. Aquí se 
importan algunas funciones y objetos de la biblioteca de Redux: createStore, applyMiddleware y compose.
Luego, se importa el rootReducer desde un archivo llamado reducer.js que debe contener la lógica principal de la aplicación.
Después, se importa thunkMiddleware que es una biblioteca que permite 
escribir acciones asíncronas en Redux.
La constante composeEnhancer sirve para utilizar la extensión de 
Redux DevTools en el navegador para depurar y monitorear el estado de la tienda. Si la extensión no está disponible, se utiliza la función compose de Redux para combinar los middleware.
Finalmente, se crea la tienda llamando a la función createStore de 
Redux, pasando como argumentos el rootReducer y el middleware 
thunkMiddleware combinados con la función composeEnhancer. 
La tienda es exportada para que pueda ser utilizada en otras 
partes de la aplicación.
     */
