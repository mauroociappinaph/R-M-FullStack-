import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

/**
<Provider> permite que los componentes dentro de la aplicación accedan 
al estado de la tienda(store) y también a los dispatchers para enviar acciones a la tienda.
 */
